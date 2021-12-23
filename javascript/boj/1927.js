// 1927 - 최소 힙

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
let N = input[0];

class minHeap {
    node = [];
    isEmpty() {
        // node 배열에 첫번째 요소가 있는지 여부 확인
        if (this.node[0]) {
            return false;
        } else {
            // [0]에 요소가 없으면 true(isEmpty이므로)
            return true;
        }
    }
    push(n) {
        this.node.push(n);
        // 인덱스를 최소힙에 맞게 정렬
        this.chkPushPri();
    }
    chkPushPri(idx = this.node.length - 1) {
        if (idx < 1) {
            return;
        }
        let curNode = this.node[idx];
        let parentIdx = Math.floor((idx - 1) / 2);
        let parentNode = this.node[parentIdx];

        // 부모노드가 현재노드보다 값이 작으면 재정렬할 필요없으므로 종료
        if (parentNode <= curNode) {
            return;
        }

        this.node[parentIdx] = curNode;
        this.node[idx] = parentNode;
        idx = parentIdx;
        this.chkPushPri(idx);
    }
    pop() {
        // 루트노드에 있는 것을 popped에 저장
        let popped = this.node[0];

        // 루트노드밖에 존재하지 않으면(배열의 길이가 1이면) 루트노드만 pop해주고 종료
        if (this.node.length === 1) {
            this.node.pop();
            return popped;
        }

        // 배열의 맨 뒤에 있는 것을 루트노드로 올려주고
        this.node[0] = this.node.pop();
        // 재정렬
        this.chkPopPri();

        return popped;
    }

    chkPopPri(idx = 0) {
        let leftChildIdx = idx * 2 + 1;
        let rightChildIdx = leftChildIdx + 1;

        let length = this.node.length;
        // 현재 체크할 노드의 인덱스
        let root = idx;

        // 자식노드가 없으면 return
        if (!this.node[leftChildIdx] && !this.node[rightChildIdx]) {
            return;
        }
        // 왼쪽자식노드만 있으면
        if (!this.node[rightChildIdx]) {
            // 왼쪽 자식 노드의 값이 현재 노드의 값보다 작은지 확인하여 root인덱스에 저장
            if (this.node[leftChildIdx] < this.node[root]) {
                root = leftChildIdx;
            }
            // 왼쪽 오른쪽 자식노드가 모두 있으면서
            // 오른쪽 노드가 왼쪽노드 값보다 작으면
        } else if (this.node[leftChildIdx] > this.node[rightChildIdx]) {
            if (
                // 자식노드를 구할때 * 2 를 하므로 length 안에 들어오는지 확인
                rightChildIdx <= length &&
                this.node[rightChildIdx] < this.node[root]
            ) {
                root = rightChildIdx;
            }
        } else {
            if (
                leftChildIdx <= length &&
                this.node[leftChildIdx] < this.node[root]
            ) {
                root = leftChildIdx;
            }
        }

        // idx로 들어온 값과 현재 바꿔준 root값이 다르면 노드끼리 값을 바꿈
        if (root !== idx) {
            let temp = this.node[root];
            this.node[root] = this.node[idx];
            this.node[idx] = temp;
            // 반복
            this.chkPopPri(root);
        }
    }
}

let q = new minHeap();
let ans = "";
for (let i = 1; i <= N; i++) {
    if (input[i] === 0) {
        if (!q.isEmpty()) {
            ans += q.pop() + "\n";
        } else {
            ans += "0\n";
        }
    } else {
        q.push(input[i]);
    }
}
console.log(ans);
