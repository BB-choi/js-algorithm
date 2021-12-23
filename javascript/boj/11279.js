// 11279 - 최대 힙

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n")
//     .map(Number);

const N = input[0];

// https://github.com/BB-choi/learn-data-structure-using-javascript/blob/main/05._Queue/5.5.priority_Queue.js
// 기존 dequeue를 splice로 하는 방법은 시간 초과가 되므로
// maxHeap을 구현해야 한다.

class maxHeap {
    constructor() {
        this.arr = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.isEmpty = isEmpty;
        this.chkEnqueuePri = chkEnqueuePri;
        this.chkDequeuePri = chkDequeuePri;
    }
}

function chkEnqueuePri(idx = this.arr.length - 1) {
    if (idx < 1) return;

    let curNode = this.arr[idx];
    let parentIdx = parseInt((idx - 1) / 2);
    let parentNode = this.arr[parentIdx];

    if (parentNode >= curNode) return;

    this.arr[parentIdx] = curNode;
    this.arr[idx] = parentNode;
    idx = parentIdx;
    this.chkEnqueuePri(idx);
}

function chkDequeuePri(idx = 0) {
    let leftChildIdx = idx * 2 + 1;
    let rightChildIdx = leftChildIdx + 1;

    let length = this.arr.length;
    let root = idx;

    if (!this.arr[leftChildIdx] && !this.arr[rightChildIdx]) return;
    if (!this.arr[rightChildIdx]) {
        if (this.arr[leftChildIdx] > this.arr[root]) {
            root = leftChildIdx;
        }
    }
    if (this.arr[leftChildIdx] < this.arr[rightChildIdx]) {
        if (
            rightChildIdx <= length &&
            this.arr[rightChildIdx] > this.arr[root]
        ) {
            root = rightChildIdx;
        }
    } else {
        if (leftChildIdx <= length && this.arr[leftChildIdx] > this.arr[root]) {
            root = leftChildIdx;
        }
    }

    if (root !== idx) {
        let t = this.arr[root];
        this.arr[root] = this.arr[idx];
        this.arr[idx] = t;
        this.chkDequeuePri(root);
    }
}

function enqueue(el) {
    this.arr.push(el);
    this.chkEnqueuePri();
}

function dequeue() {
    let dequeueData = this.arr[0];

    if (this.arr.length === 1) {
        this.arr.pop();
        return dequeueData;
    }

    this.arr[0] = this.arr.pop();
    this.chkDequeuePri();
    return dequeueData;
}

function isEmpty() {
    if (this.arr.length) {
        return false;
    } else {
        return true;
    }
}

let q = new maxHeap();
let str = "";

for (let i = 1; i <= N; i++) {
    if (input[i] > 0) {
        q.enqueue(input[i]);
    } else if (!q.isEmpty()) {
        str += q.dequeue() + "\n";
    } else if (q.isEmpty()) {
        str += "0\n";
    }
}

console.log(str);

// reference
// https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%B0%B1%EC%A4%80-%EC%B5%9C%EB%8C%80-%ED%9E%9911279
