// 트리의 부모 찾기
// https://www.acmicpc.net/problem/11725

let path = "input.txt";
// path = "/dev/stdin"

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input[[0]]);
let tree = {};
let answer = Array(N + 1).fill(0);
answer[1] = 1;
for (let i = 1; i <= N; i++) {
    tree[i] = [];
}
for (let i = 1; i < N; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    tree[a].push(b);
    tree[b].push(a);
}

function findParent(Node, i) {
    Node.forEach((el) => {
        if (!answer[el]) {
            answer[el] = i;
            findParent(tree[el], el);
        }
    });
}

findParent(tree[1], 1);
let answerStr = "";
for (let i = 2; i <= N; i++) {
    answerStr += answer[i] + "\n";
}
console.log(answerStr);
