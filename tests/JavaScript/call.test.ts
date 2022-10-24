import { describe, expect, test } from '@jest/globals'
import '@JavaScript/call'

describe('call module', () => {
  test('call function', () => {
    function callFn(name: string) {
      return this.value + name
    }
    const context = {
      value: 'i am context, say: '
    }
    const helloWorld = 'hello world'
    expect(callFn.call(context, helloWorld)).toBe(context.value + helloWorld)
  })
})
