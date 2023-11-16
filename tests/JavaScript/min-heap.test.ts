import { describe, expect, test } from '@jest/globals'
import { _MinHeap, MinHeap } from '@JavaScript/min-heap'

describe('_MinHeap class', () => {
  test('peek method returns null when heap is empty', () => {
    const minHeap = new _MinHeap()
    expect(minHeap.peek()).toBeNull()
  })

  test('pop method returns null when heap is empty', () => {
    const minHeap = new _MinHeap()
    expect(minHeap.pop()).toBeNull()
  })

  test('pop method returns the minimum element in the heap', () => {
    const minHeap = new _MinHeap()
    minHeap.insert(3)
    minHeap.insert(1)
    minHeap.insert(2)
    expect(minHeap.pop()).toBe(1)
  })

  test('insert method inserts element into the heap', () => {
    const minHeap = new _MinHeap()
    minHeap.insert(3)
    expect(minHeap.heap).toEqual([3])
  })

  test('size method returns the size of the heap', () => {
    const minHeap = new _MinHeap()
    minHeap.insert(3)
    minHeap.insert(1)
    minHeap.insert(2)
    expect(minHeap.size()).toBe(3)
  })
})

describe('MinHeap class', () => {
  test('peek method returns null when heap is empty', () => {
    const minHeap = new MinHeap()
    expect(minHeap.peek()).toBeNull()
  })

  test('pop method returns null when heap is empty', () => {
    const minHeap = new MinHeap()
    expect(minHeap.pop()).toBeNull()
  })

  test('pop method returns the minimum element in the heap', () => {
    const minHeap = new MinHeap()
    minHeap.insert(3)
    minHeap.insert(1)
    minHeap.insert(2)
    expect(minHeap.pop()).toBe(1)
  })

  test('insert method inserts element into the heap', () => {
    const minHeap = new MinHeap()
    minHeap.insert(3)
    expect(minHeap.heap).toEqual([3])
  })

  test('size method returns the size of the heap', () => {
    const minHeap = new MinHeap()
    minHeap.insert(3)
    minHeap.insert(1)
    minHeap.insert(2)
    expect(minHeap.size()).toBe(3)
  })
})
