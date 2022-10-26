/**
 * bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
 * function.bind(thisArg[, arg1[, arg2[, ...]]])
 * thisArg: 在 function 函数运行时使用的 this 值
 * arg1, arg2, ... : 指定的参数列表
 */

Function.prototype.bind = function (context: any, ...args: any[]) {
  const that = context || window
  const fn: any = this
  return function bind(...fnArgs: any[]) {
    if (new.target === bind) {
      return new fn(...[...args, ...fnArgs])
    }
    return fn.apply(that, [...args, ...fnArgs])
  }
}
