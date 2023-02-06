let instance
class SingleInstance {
  constructor() {}

  init() {
    if (instance) {
      return instance
    }
    return (instance = new SingleInstance())
  }
}
