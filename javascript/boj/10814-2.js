// 나이순 정렬
// https://www.acmicpc.net/problem/10814

let path = "input.txt";
// path = "/dev/stdin";

const [N, ...members] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" "));

// const count = Number(N);

console.log(
  members
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((el) => el.join(" "))
    .join("\n")
);
