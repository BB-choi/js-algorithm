// 問題 1
// https://www.acmicpc.net/problem/5617

let path = "input.txt";
// path = "/dev/stdin";

let [...nums] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) =>
    el
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  );

const len = nums.length;

let 삼각형 = 0;
let 직각삼각형 = 0;
let 예각삼각형 = 0;
let 둔각삼각형 = 0;

for (let i = 0; i < len; i++) {
  const [a, b, c] = nums[i];

  const a2 = a * a;
  const b2 = b * b;
  const c2 = c * c;

  if (a + b > c) {
    삼각형++;
  } else {
    break;
  }

  if (a2 + b2 === c2) {
    직각삼각형++;
    continue;
  }

  if (a2 + b2 < c2) {
    둔각삼각형++;
    continue;
  }

  if (a2 + b2 > c2) {
    예각삼각형++;
    continue;
  }
}

console.log(`${삼각형} ${직각삼각형} ${예각삼각형} ${둔각삼각형}`);
