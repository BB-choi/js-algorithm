// ピアノコンクール (Piano Competition)
// https://www.acmicpc.net/problem/24420

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input[0]);
const [...nums] = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
for (let i = 1; i < N - 1; i++) {
  sum += nums[i];
}
console.log(sum);
