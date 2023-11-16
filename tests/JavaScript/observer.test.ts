// FILEPATH: /Users/melon95/repository/aknowledge/tests/JavaScript/observer.test.ts

import { describe, expect, jest, test } from '@jest/globals'
import { Observer, Subject } from '@JavaScript/observer'

describe('Observer class', () => {
  test('update method', () => {
    console.log = jest.fn()
    const observer = new Observer('Observer 1')
    const message = { test: 'test' }
    observer.update(message)
    expect(console.log).toHaveBeenCalledWith(message)
  })
})

describe('Subject class', () => {
  test('addObserver, removeObserver, and notify methods', () => {
    const observer1 = new Observer('Observer 1')
    const observer2 = new Observer('Observer 2')
    observer1.update = jest.fn()
    observer2.update = jest.fn()

    const subject = new Subject()
    subject.addObserver(observer1)
    subject.addObserver(observer2)

    const message = { test: 'test' }
    subject.notify(message)

    expect(observer1.update).toHaveBeenCalledWith(message)
    expect(observer2.update).toHaveBeenCalledWith(message)

    subject.removeObserver(observer2)
    subject.notify(message)

    expect(observer1.update).toHaveBeenCalledTimes(2)
    expect(observer2.update).toHaveBeenCalledTimes(1)
  })
})
