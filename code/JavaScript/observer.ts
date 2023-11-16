// 观察者模式

export class Observer {
  name: string
  constructor(name: string) {
    this.name = name
  }
  update(message) {
    console.log(message)
  }
}

export class Subject {
  observerList = []
  addObserver(observer: Observer) {
    this.observerList.push(observer)
  }
  removeObserver(observer: Observer) {
    const index = this.observerList.findIndex((item) => item === observer)
    if (index > -1) {
      this.observerList.splice(index, 1)
    }
  }
  notify(message) {
    this.observerList.forEach((observer) => {
      observer.update(message)
    })
  }
}


// 使用示例
let subject = new Subject();

let observer1 = new Observer('Observer 1');
let observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify({ test: 'test' });
// 输出：Observer 1 received data: { test: 'test' }
// 输出：Observer 2 received data: { test: 'test' }

subject.removeObserver(observer2);
subject.notify({ test: 'test' });
// 输出：Observer 1 received data: { test: 'test' }
