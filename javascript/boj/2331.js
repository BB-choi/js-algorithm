// 반복수열
// https://www.acmicpc.net/problem/2331

let path = "input.txt";
// path = "/dev/stdin";
let [A, P] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let D = {};
D[0] = 0;
D[1] = A;

function calc(num) {
    let result = 0;
    let temp = num;
    while (temp) {
        result += (temp % 10) ** P;
        temp = Math.floor(temp / 10);
    }
    return result;
}

let cur = D[1];
let idx = 2;
while (!Object.values(D).includes(calc(cur))) {
    D[idx++] = calc(cur);
    cur = D[idx - 1];
}

D[idx++] = calc(cur);
cur = D[idx - 1];

let idxs = [];
Object.keys(D).find((key) => {
    if (D[key] === D[idx - 1]) {
        idxs.push(key);
    }
});

console.log(Number(idxs[0]) - 1);
