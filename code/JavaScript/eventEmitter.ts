import { off } from 'process'

type callbackFn = (...args: any[]) => any

interface EventEmitterObj {
  [key: string]: callbackFn[]
}

class EventEmitter {
  event: EventEmitterObj
  constructor() {}
  on(key: string, fn: callbackFn) {
    if (!this.event[key]) {
      this.event[key] = []
    }
    this.event[key].push(fn)
  }
  emit(key: string, ...args: any[]) {
    if (this.event[key]) {
      for (let i = 0; i < this.event[key].length; i++) {
        this.event[key][i](...args)
      }
    }
  }
  off(key: string, fn: callbackFn) {
    if (this.event[key]) {
      const index = this.event[key].findIndex((cb) => cb === fn)
      if (index > -1) {
        this.event[key].splice(index, 1)
      }
    }
  }
  once(key: string, fn: callbackFn) {
    const onceFn = (...args) => {
      fn(...args)
      this.off(key, onceFn)
    }
    this.on(key, onceFn)
  }
  removeAll(key?: string) {
    if (key !== undefined) {
      if (this.event[key]) {
        this.event[key] = []
      }
    } else {
      this.event = {}
    }
  }
}
