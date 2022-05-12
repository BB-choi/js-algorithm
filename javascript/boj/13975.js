// 파일 합치기 3
// https://www.acmicpc.net/problem/13975

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const T = Number(input[0]);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getParentIndex = (index) => Math.floor(index / 2);

  push(val) {
    this.heap.push(val);

    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (parentIndex !== 0 && this.heap[parentIndex] > val) {
      const temp = this.heap[parentIndex];

      this.heap[parentIndex] = val;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const returnVal = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] > this.heap[leftIndex] ||
      this.heap[currentIndex] > this.heap[rightIndex]
    ) {
      const temp = this.heap[currentIndex];

      if (this.heap[leftIndex] > this.heap[rightIndex]) {
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        currentIndex = rightIndex;
      } else {
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnVal;
  }

  isEmpty() {
    return this.heap.length === 2;
  }
}

for (let i = 1; i <= T * 2; i += 2) {
  const K = Number(input[i]);

  const heap = new MinHeap();
  input[i + 1].split(" ").forEach((el) => heap.push(Number(el)));

  let cost = 0;

  while (!heap.isEmpty()) {
    const sum = heap.pop() + heap.pop();
    cost += sum;
    heap.push(sum);
  }

  console.log(cost);
}
