/**
 * forEach() 方法对数组的每个元素执行一次给定的函数。
 * forEach((element, index, array) => { ... }, thisArg)
 * thisArg: 可选参数。当执行回调函数时，用作 this 的值。
 */

type ICallbackFn = (item: any, index: number, arr: any[]) => any

Array.prototype.forEach = function (callbackFn: ICallbackFn, thisArg) {
  const arr = this
  // forEach遍历的范围在第一次调用 callbackFn 前就会确定
  const len = arr.length
  for (let i = 0; i < len; i++) {
    callbackFn.call(thisArg, arr[i], i, arr)
  }
}
