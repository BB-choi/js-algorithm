// 로프
// https://www.acmicpc.net/problem/2217

let stdin = "input.txt";
// stdin = "/dev/stdin";

const input = require("fs")
  .readFileSync(stdin)
  .toString()
  .split("\n")
  .map(Number);

const N = input[0];

const 로프 = [];
for (let i = 1; i <= N; i++) {
  로프.push(input[i]);
}

로프.sort((a, b) => b - a);

const 중량 = [];
for (let i = 0; i < N; i++) {
  const 지금중량 = 로프[i] * (i + 1);
  중량.push(지금중량);
}

console.log(Math.max(...중량));
