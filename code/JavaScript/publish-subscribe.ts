class Publish {
  context: Queue
  constructor(context: Queue) {
    this.context = context
  }
  publish(type: string, args) {
    this.context.publish(type, args)
  }
}

class Queue {
  subscriberMap = {}

  topicMap = {}
  publish(type, args) {
    if (this.topicMap[type]) {
      this.topicMap[type] = []
    }
    this.topicMap[type].push(args)
  }
  subscribe(type: string, sub: Subscribe) {
    if (!this.subscriberMap[type]) {
      this.subscriberMap[type] = []
    }
    this.subscriberMap[type].push(sub)
  }
}

class Subscribe {
  context: Queue
  constructor(context: Queue) {
    this.context = context
  }
  subscribe(type: string) {
    this.context.subscribe(type, this)
  }
}
