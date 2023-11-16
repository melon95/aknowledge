
// Github Copilot
export class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }

  swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(value: number): void {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (parentIndex >= 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop(): number | undefined {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    let currentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);

    while (leftChildIndex < this.heap.length) {
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      const biggerChildIndex =
        rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[currentIndex] < this.heap[biggerChildIndex]) {
        this.swap(currentIndex, biggerChildIndex);
        currentIndex = biggerChildIndex;
        leftChildIndex = this.getLeftChildIndex(currentIndex);
      } else {
        break;
      }
    }

    return max;
  }
  size() {
    return this.heap.length
  }
  peek() {
    if (this.heap.length === 0) return null
    return this.heap[0]
  }
}
const maxHeap = new MaxHeap();
maxHeap.insert(4);
maxHeap.insert(2);
maxHeap.insert(8);
maxHeap.insert(5);
console.log(maxHeap.peek()); // 输出 8
console.log(maxHeap.pop()); // 输出 8
console.log(maxHeap.size()); // 输出 3


export class _MaxHeap {
  heap: number[] = []
  peek() {
    if (this.heap.length === 0) return null
    return this.heap[0]
  }
  insert(num: number) {
    this.heap.push(num)
    this.heapifyUp()
  }
  heapifyUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      if (this.heap[index] > this.heap[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }
  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()
    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return max
  }
  heapifyDown() {
    let index = 0
    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)
      let largerChildIndex = leftChildIndex
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
        largerChildIndex = rightChildIndex
      }
      if (this.heap[largerChildIndex] > this.heap[index]) {
        this.swap(largerChildIndex, index)
        index = largerChildIndex
      } else {
        break
      }
    }
  }
  getParentIndex(index: number) {
    return Math.floor((index - 1) / 2)
  }
  getLeftChildIndex(index: number) {
    return 2 * index + 1
  }
  getRightChildIndex(index: number) {
    return 2 * index + 2
  }
  swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
  size() {
    return this.heap.length
  }
}
console.log('=========')
// 示例用法
const _maxHeap = new _MaxHeap();
_maxHeap.insert(4);
_maxHeap.insert(2);
_maxHeap.insert(8);
_maxHeap.insert(5);
console.log(_maxHeap.peek()); // 输出 8
console.log(_maxHeap.pop()); // 输出 8
console.log(_maxHeap.size()); // 输出 3
