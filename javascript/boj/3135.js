// 라디오
// https://www.acmicpc.net/problem/3135

let path = "input.txt";
// path = "/dev/stdin";

let [target, N, ...input] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const [A, B] = target.split(" ").map(Number);
N = +N;
input = input.map(Number);

let count = 0;

let diff = 1000;

for (let i = 0; i < N; i++) {
  const curFav = input[i];
  const curDiff = Math.abs(B - curFav);
  if (curDiff < diff) {
    diff = curDiff;
  }
}

console.log(Math.min(Math.abs(B - A), diff + 1));
