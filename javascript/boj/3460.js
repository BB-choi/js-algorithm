// 이진수
// https://www.acmicpc.net/problem/3460

let path = "input.txt";
// path = "/dev/stdin";

let [T, ...nums] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = "";
for (let i = 0; i < T; i++) {
  const num2 = nums[i].toString(2).split("").map(Number);
  result +=
    num2
      .reverse()
      .map((el, idx) => {
        if (el) {
          return idx;
        }
      })
      .filter((el) => el !== undefined)
      .join(" ") + "\n";
}

console.log(result);
