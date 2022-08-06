// 하얀 칸
// https://www.acmicpc.net/problem/1100

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(""));

let count = 0;
input.forEach((el, idx) => {
  if (idx % 2) {
    el.forEach((e, i) => {
      if (i % 2 && e === "F") {
        count++;
      }
    });
  } else {
    el.forEach((e, i) => {
      if (i % 2 === 0 && e === "F") {
        count++;
      }
    });
  }
});

console.log(count);
