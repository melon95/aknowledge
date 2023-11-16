// FILEPATH: /Users/melon95/repository/aknowledge/tests/JavaScript/publish-subscribe.test.ts

import { describe, expect, jest, test } from '@jest/globals'
import { PubSub, Publisher, Subscriber } from '@JavaScript/publisher-subscriber'

describe('PubSub class', () => {
  test('subscribe, unsubscribe, and publish methods', () => {
    const pubsub = new PubSub()
    const fn = jest.fn()

    pubsub.subscribe('event', fn)
    const message = { test: 'test' }
    pubsub.publish('event', message)

    expect(fn).toHaveBeenCalledWith(message)

    pubsub.unsubscribe('event', fn)
    pubsub.publish('event', message)

    expect(fn).toHaveBeenCalledTimes(1)
  })
})

describe('Publisher class', () => {
  test('publish method', () => {
    const pubsub = new PubSub()
    const publisher = new Publisher(pubsub)
    const fn = jest.fn()

    pubsub.subscribe('event', fn)
    const message = { test: 'test' }
    publisher.publish('event', message)

    expect(fn).toHaveBeenCalledWith(message)
  })
})

describe('Subscriber class', () => {
  test('subscribe method', () => {
    const pubsub = new PubSub()
    const subscriber = new Subscriber(pubsub)
    const fn = jest.fn()

    subscriber.subscribe('event', fn)
    const message = { test: 'test' }
    pubsub.publish('event', message)

    expect(fn).toHaveBeenCalledWith(message)
  })
})
