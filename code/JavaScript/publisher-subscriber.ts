// 发布订阅模式
export class PubSub {
  subscribers: { [key: string]: Function[] } = {}
  subscribe(type: string, fn: Function) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  }
  unsubscribe(type: string, fn: Function) {
    const fns = this.subscribers[type]
    if (!fns) return
    const index = fns.findIndex((h_fn) => h_fn === fn)
    if (index > -1) {
      fns.splice(index, 1)
    }
  }
  publish(type: string, message: any) {
    const fns = this.subscribers[type]
    if (!fns) return
    fns.forEach((fn) => {
      fn(message)
    })
  }
}

// 下面两个类作为一个补充
export class Publisher {
  pubsub: PubSub
  constructor(pubsub: PubSub) {
    this.pubsub = pubsub
  }
  publish(type: string, message: any) {
    this.pubsub.publish(type, message)
  }
}
export class Subscriber {
  pubsub: PubSub
  constructor(pubsub: PubSub) {
    this.pubsub = pubsub
  }
  subscribe(type: string, fn: Function) {
    this.pubsub.subscribe(type, fn)
  }
}

// 使用示例
let pubsub = new PubSub();

let logData = (data) => {
  console.log(data);
};

pubsub.subscribe('data', logData);
pubsub.publish('data', { test: 'test' }); // 输出：{ test: 'test' }
pubsub.unsubscribe('data', logData);
pubsub.publish('data', { test: 'test' }); // 无输出
