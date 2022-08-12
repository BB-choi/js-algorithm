// 가계부 (Easy)
// https://www.acmicpc.net/problem/12836

let path = "input.txt";
// path = "/dev/stdin";

let [[N, Q], ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let result = Array.from({ length: N + 1 }).fill(0);
let answer = "";

for (const n of arr) {
  const [cmd, p, x] = n;

  if (cmd === 1) {
    result[p] = result[p] + x;
  }

  if (cmd === 2) {
    answer += `${result
      .filter((_, idx) => idx >= p && idx <= x)
      .reduce((prev, cur) => prev + cur, 0)}\n`;
  }
}

console.log(answer);
