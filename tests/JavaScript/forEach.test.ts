import { describe, expect, test } from '@jest/globals'
import '@JavaScript/forEach'

describe('foreach module', () => {
  test('forEach function', () => {
    const list = [1, 2, 3]
    const context = {}
    list.forEach((item, index, arr) => {
      context[index] = item
    }, context)
    expect(context).toEqual({ 0: 1, 1: 2, 2: 3 })
  })
})
