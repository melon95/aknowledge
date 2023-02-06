const { isObject, isArray } = require('lodash')
function deepClone(source) {
  const hasClonedMap = new WeakMap()
  function deepCloneArray(source: any[]) {
    const target = source.map((item) => deepCloneLaunch(item))
    hasClonedMap.set(source, target)
    return target
  }

  function deepCloneObject(source: object) {
    const target = {}
    hasClonedMap.set(source, target)

    const keys = Object.getOwnPropertyNames(source)

    keys.forEach((key) => {
      target[key] = deepCloneLaunch(source[key])
    })
    return target
  }

  function deepCloneLaunch(source) {
    if (!(isObject(source) || isArray(source))) {
      return source
    }
    if (hasClonedMap.has(source)) return hasClonedMap.get(source)
    return (isArray(source) ? deepCloneArray : deepCloneObject)(source)
  }

  return deepCloneLaunch(source)
}
