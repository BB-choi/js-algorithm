// 랜선 자르기
// https://www.acmicpc.net/problem/1654

let filePath = "input.txt";
// filePath = "/dev/stdin";

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [lenK, N] = input[0].split(" ").map(Number);
let inputLen = input.length;
const K = [];
for (let i = 1; i < inputLen; i++) {
    K[i - 1] = Number(input[i]);
}

const maxLen = Math.max(...K);

let first = 0;
let last = maxLen;
let answer = 0;

while (first <= last) {
    let mid = Math.floor(first + (last - first) / 2);
    let count = 0;
    for (let i = 0; i < lenK; i++) {
        count += Math.floor(K[i] / mid);
    }

    if (count < N) {
        last = mid - 1;
    } else {
        // count >= N
        answer = mid;
        first = mid + 1;
    }
}

console.log(answer);
