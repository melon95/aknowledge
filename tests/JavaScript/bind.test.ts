import { describe, expect, test } from '@jest/globals'
import '@JavaScript/bind'

describe('bind module', () => {
  test('bind function', () => {
    function bindFn(name: string, age: number) {
      this.name = name
      this.age = age
    }
    const context = {}
    const bindResFn = bindFn.bind(context, 'melon')
    bindResFn(18)
    expect(context).toEqual({ name: 'melon', age: 18 })
    expect(new bindResFn(19)).toEqual({ name: 'melon', age: 19 })
  })
})
