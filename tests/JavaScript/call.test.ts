import { describe, expect, test } from '@jest/globals'
import '@JavaScript/call'

describe('sum module', () => {
  test('call function', () => {
    function callFn() {
      return this.value
    }
    const context = {
      value: 'i am context value'
    }
    expect(callFn.call(context)).toBe(context.value)
  })
})
