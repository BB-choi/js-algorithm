// 보물
// https://www.acmicpc.net/problem/1026

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input[0]);

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

A.sort((a, b) => a - b);
const newB = [...B].sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
  answer += A[i] * newB[i];
}

console.log(answer);
