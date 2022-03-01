// 병든 나이트
// https://www.acmicpc.net/problem/1783

let stdin = "input.txt";
// stdin = "/dev/stdin";

const [N, M] = require("fs")
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let answer = 0;
if (N === 1) {
    answer = 1;
} else if (N === 2) {
    answer = Math.min(4, Math.floor((M - 1) / 2) + 1);
} else if (N >= 3) {
    if (M <= 6) {
        answer = Math.min(4, M);
    } else {
        answer = M - 2;
    }
}

console.log(answer);
