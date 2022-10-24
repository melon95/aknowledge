/**
 * function.apply(thisArg, argsArray)
 * thisArg: 在 function 函数运行时使用的 this 值
 * argsArray: 参数数组
 */

Function.prototype.apply = function (context: any, args: any[]): any {
  const that = context || window
  // 1. 通过方法调用来处理函数的this指向
  const applyField = Symbol('apply')
  that[applyField] = this

  // 2. 执行函数并返回结果
  const res = that[applyField](...args)
  delete that[applyField]
  return res
}
