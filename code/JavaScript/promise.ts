/**
 * Promise 对象用于表示一个异步操作的最终完成（或失败）及其结果值。
 * 规范地址：https://promisesaplus.com/
 */

const PEDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    // 2.3.1
    return reject(
      new TypeError('The promise and the return value are the same')
    )
  }
  if (x instanceof NewPromise) {
    // 2.3.2
    x.then(resolve, reject)
    return
  } else if (typeof x === 'function' || (typeof x === 'object' && x !== null)) {
    let isExecuted = false
    try {
      // 2.3.3
      const then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (data) => {
            if (!isExecuted) {
              isExecuted = true
              return resolvePromise(promise2, data, resolve, reject)
            }
          },
          (err) => {
            if (!isExecuted) {
              isExecuted = true
              reject(err)
            }
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (!isExecuted) {
        isExecuted = true
        reject(e)
      }
    }
  } else {
    // 2.3.4
    resolve(x)
  }
}

class NewPromise {
  status = PEDING
  resolveValue
  rejectValue
  fulfilledFnList = []
  rejectedFnList = []
  constructor(execute: Function) {
    // 1. 只有在pending时才能resolve
    // 2. resolve后需要异步执行then的resolve方法
    const resolve = (val) => {
      if (this.status === PEDING) {
        this.resolveValue = val
        this.status = FULFILLED
        setTimeout(() => {
          this.fulfilledFnList.forEach((fn) => {
            fn(this.resolveValue)
          })
        }, 0)
      }
    }
    // 1. 只有在pending时才能reject
    // 2. reject后需要异步执行then的reject方法
    const reject = (val) => {
      if (this.status === PEDING) {
        this.rejectValue = val
        this.status = REJECTED
        setTimeout(() => {
          this.rejectedFnList.forEach((fn) => {
            fn(this.rejectValue)
          })
        }, 0)
      }
    }
    try {
      execute(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled: Function, onRejected?: Function) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = (val) => val
    }
    if (typeof onRejected !== 'function') {
      onRejected = (val) => {
        throw val
      }
    }
    if (this.status === PEDING) {
      // 如果状态还是pending，则存储函数
      const promise2 = new Promise((resolve, reject) => {
        this.fulfilledFnList.push((val) => {
          try {
            const x = onFulfilled(val)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
        this.rejectedFnList.push((val) => {
          try {
            const x = onRejected(val)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      })
      return promise2
    }

    if (this.status === FULFILLED) {
      // 如果状态还是resolve，则异步执行resolveFn
      const promise2 = new NewPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.resolveValue)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      })
      return promise2
    }

    if (this.status === REJECTED) {
      // 如果状态还是reject，则异步执行rejectFn
      const promise2 = new NewPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onRejected(this.rejectValue)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      })
      return promise2
    }
  }
  catch(onRejected: Function) {
    return this.then(null, onRejected)
  }
  finally(fn: Function) {
    return this.then(
      (value) => {
        return NewPromise.resolve(fn()).then(() => {
          return value
        })
      },
      (error) => {
        return NewPromise.resolve(fn()).then(() => {
          throw error
        })
      }
    )
  }

  static reject(val) {
    return new NewPromise((resolve, reject) => {
      reject(val)
    })
  }
  static resolve(val) {
    return new NewPromise((resolve, reject) => {
      resolve(val)
    })
  }
  static all(promiseList) {
    // promiseList 规范是一个 Iterable 对象，可通过 for...of 遍历
    if (!Array.isArray(promiseList)) {
      throw new Error('argument must be a array')
    }
    return new NewPromise((resolve, reject) => {
      const len = promiseList.length
      const res = new Array(len)
      // 如果传入一个空的数组，则把promise的状态变成fulfilled
      if (len === 0) resolve(res)

      let sum = 0
      try {
        for (let i = 0; i < len; i++) {
          NewPromise.resolve(promiseList[i]).then((val) => {
            res[i] = val
            if (sum++ === len) {
              resolve(res)
            }
          }, reject)
        }
      } catch (err) {
        reject(err)
      }
    })
  }
  static race(promiseList) {
    // promiseList 规范是一个 Iterable 对象，可通过 for...of 遍历
    if (!Array.isArray(promiseList)) {
      throw new Error('argument must be a array')
    }
    return new NewPromise((resolve, reject) => {
      // 如果传入一个空的数组，则promise永远为pending
      const len = promiseList.length
      try {
        for (let i = 0; i < len; i++) {
          NewPromise.resolve(promiseList[i]).then(resolve, reject)
        }
      } catch (err) {
        reject(err)
      }
    })
  }
  // 为了执行promise的测试
  static deferred() {
    const result: any = {}
    result.promise = new NewPromise((resolve, reject) => {
      result.resolve = resolve
      result.reject = reject
    })

    return result
  }
}

module.exports = NewPromise
