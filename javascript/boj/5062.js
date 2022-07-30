// 問題1
// https://www.acmicpc.net/problem/5602

let path = "input.txt";
// path = "/dev/stdin";

let [[n, m], ...nums] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = Array.from({ length: m })
  .fill(0)
  .map((el, idx) => [idx + 1, el]);

for (let i = 0; i < n; i++) {
  nums[i].forEach((el, idx) => {
    if (el) {
      answer[idx][1] += 1;
    }
  });
}

answer.sort((a, b) => b[1] - a[1]);
console.log(answer.map((el) => el[0]).join(" "));
