/**
 * 1. 创建一个空的简单 JavaScript 对象（即**{}**）；
 * 2. 为步骤 1 新创建的对象添加属性**__proto__**，将该属性链接至构造函数的原型对象；
 * 3. 将步骤 1 新创建的对象作为 this 的上下文；
 * 4. 如果该函数没有返回对象，则返回**this**
 */
const newObj = (constructor: Function, ...args: any[]): any => {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const result = constructor.apply(obj, args)
  if (result && typeof result === 'object') return result
  return obj
}

export default newObj
