// Github Copilot

import { describe, expect, test } from '@jest/globals'
import { MaxHeap, _MaxHeap } from '@JavaScript/max-heap'

describe('MaxHeap', () => {
  test('insert and pop', () => {
    const maxHeap = new MaxHeap()
    maxHeap.insert(4)
    maxHeap.insert(2)
    maxHeap.insert(8)
    maxHeap.insert(5)
    expect(maxHeap.peek()).toBe(8)
    expect(maxHeap.pop()).toBe(8)
    expect(maxHeap.size()).toBe(3)
  })

  test('insert and pop with negative numbers', () => {
    const maxHeap = new MaxHeap()
    maxHeap.insert(-4)
    maxHeap.insert(-2)
    maxHeap.insert(-8)
    maxHeap.insert(-5)
    expect(maxHeap.peek()).toBe(-2)
    expect(maxHeap.pop()).toBe(-2)
    expect(maxHeap.size()).toBe(3)
  })

  test('insert and pop with duplicates', () => {
    const maxHeap = new MaxHeap()
    maxHeap.insert(4)
    maxHeap.insert(2)
    maxHeap.insert(8)
    maxHeap.insert(5)
    maxHeap.insert(8)
    maxHeap.insert(2)
    expect(maxHeap.peek()).toBe(8)
    expect(maxHeap.pop()).toBe(8)
    expect(maxHeap.size()).toBe(5)
  })

  test('insert and pop with one element', () => {
    const maxHeap = new MaxHeap()
    maxHeap.insert(4)
    expect(maxHeap.peek()).toBe(4)
    expect(maxHeap.pop()).toBe(4)
    expect(maxHeap.size()).toBe(0)
  })

  test('insert and pop with empty heap', () => {
    const maxHeap = new MaxHeap()
    expect(maxHeap.peek()).toBe(null)
    expect(maxHeap.pop()).toBe(null)
    expect(maxHeap.size()).toBe(0)
  })
})

describe('_MaxHeap', () => {
  test('insert and pop', () => {
    const _maxHeap = new _MaxHeap()
    _maxHeap.insert(4)
    _maxHeap.insert(2)
    _maxHeap.insert(8)
    _maxHeap.insert(5)
    expect(_maxHeap.peek()).toBe(8)
    expect(_maxHeap.pop()).toBe(8)
    expect(_maxHeap.size()).toBe(3)
  })
  test('insert and pop with negative numbers', () => {
    const maxHeap = new _MaxHeap()
    maxHeap.insert(-4)
    maxHeap.insert(-2)
    maxHeap.insert(-8)
    maxHeap.insert(-5)
    expect(maxHeap.peek()).toBe(-2)
    expect(maxHeap.pop()).toBe(-2)
    expect(maxHeap.size()).toBe(3)
  })

  test('insert and pop with duplicates', () => {
    const maxHeap = new _MaxHeap()
    maxHeap.insert(4)
    maxHeap.insert(2)
    maxHeap.insert(8)
    maxHeap.insert(5)
    maxHeap.insert(8)
    maxHeap.insert(2)
    expect(maxHeap.peek()).toBe(8)
    expect(maxHeap.pop()).toBe(8)
    expect(maxHeap.size()).toBe(5)
  })

  test('insert and pop with one element', () => {
    const maxHeap = new _MaxHeap()
    maxHeap.insert(4)
    expect(maxHeap.peek()).toBe(4)
    expect(maxHeap.pop()).toBe(4)
    expect(maxHeap.size()).toBe(0)
  })

  test('insert and pop with empty heap', () => {
    const maxHeap = new _MaxHeap()
    expect(maxHeap.peek()).toBe(null)
    expect(maxHeap.pop()).toBe(null)
    expect(maxHeap.size()).toBe(0)
  })
})
