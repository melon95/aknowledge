/**
 * function.call(thisArg, arg1, arg2, ...)
 * thisArg: 在 function 函数运行时使用的 this 值
 * arg1, arg2, ... : 指定的参数列表
 */

Function.prototype.call = function call(context: any, ...args: any[]): any {
  const that = context || window
  const callField = Symbol('call')
  that[callField] = this
  const res = that[callField](...args)
  delete that[callField]
  return res
}
