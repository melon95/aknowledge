import { describe, expect, test } from '@jest/globals'
import '@JavaScript/apply'

describe('apply module', () => {
  test('apply function', () => {
    function callFn(name: string) {
      return this.value + name
    }
    const context = {
      value: 'i am content, say: '
    }
    const helloWorld = 'hello world'
    expect(callFn.apply(context, [helloWorld])).toBe(context.value + helloWorld)
  })
})
