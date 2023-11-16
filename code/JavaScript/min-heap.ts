// ChatGPT
export class MinHeap {
  heap: number[] = []

  // 获取父节点索引
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 获取左子节点索引
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // 获取右子节点索引
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // 交换数组中两个元素的位置
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // 向上调整堆
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // 向下调整堆
  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallerChildIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[smallerChildIndex]) {
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  // 插入元素
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 删除堆顶元素
  pop() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  // 获取堆顶元素
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}

// 示例用法
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(5);
console.log(minHeap.peek()); // 输出 2
console.log(minHeap.pop()); // 输出 2
console.log(minHeap.size()); // 输出 3


export class _MinHeap {
  heap: number[] = [];
  // 获取堆顶元素
  peek() {
    if (this.heap.length === 0) return null
    return this.heap[0]
  }
  // 堆顶元素出栈
  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()
    const min = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return min
  }
  // 向下调整
  heapifyDown() {
    let index = 0
    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)
      let smallerChildIndex = leftChildIndex
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        smallerChildIndex = rightChildIndex
      }
      if (this.heap[smallerChildIndex] < this.heap[index]) {
        this.swap(smallerChildIndex, index)
       index = smallerChildIndex
      } else {
        break
      }
    }
  }
  // 元素入栈
  insert(num: number) {
    this.heap.push(num)
    this.heapifyUp()
  }
  // 向上调整
  heapifyUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      const parentIndex = this.getParent(index)
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }
  // 获取父节点的下标
  getParent(index: number) {
    return Math.floor((index - 1) / 2)
  }
  // 获取左子节点的下标
  getLeftChildIndex(index: number) {
    return 2 * index + 1
  }
  // 获取右子节点的下标
  getRightChildIndex(index: number) {
    return  2 * index + 2
  }
  // 交换元素
  swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
  size() {
    return this.heap.length
  }
}
console.log('=========')
// 示例用法
const _minHeap = new _MinHeap();
_minHeap.insert(4);
_minHeap.insert(2);
_minHeap.insert(8);
_minHeap.insert(5);
console.log(_minHeap.peek()); // 输出 2
console.log(_minHeap.pop()); // 输出 2
console.log(_minHeap.size()); // 输出 3
