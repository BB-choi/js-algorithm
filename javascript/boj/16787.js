// マルバツスタンプ (Circle Cross Stamps)
// https://www.acmicpc.net/problem/16787

let path = "input.txt";
// path = "/dev/stdin";

let [N, result] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

N = Number(N);

let count = 0;
for (let i = 0; i < N; i++) {
  const current = result[i] + result[i + 1];
  if (current === "XO" || current === "OX") {
    count++;
    i++;
  }
}

console.log(count);
