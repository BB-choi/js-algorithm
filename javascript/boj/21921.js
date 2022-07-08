// 블로그
// https://www.acmicpc.net/problem/21921

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const visitor = input[1].split(" ").map(Number);

if (visitor.filter((el) => el).length === 0) {
  console.log("SAD");
  return;
}

const [N, X] = input[0].split(" ").map(Number);

const obj = {};
let sum = visitor.slice(0, X).reduce((a, b) => a + b);
obj[sum] = 1;

for (let i = X, j = 0; i < N; i++, j++) {
  sum -= visitor[j];
  sum += visitor[i];

  if (obj[sum]) {
    obj[sum] = obj[sum] + 1;
  } else {
    obj[sum] = 1;
  }
}

const maxNum = Math.max(...Object.keys(obj));
const answer = `${maxNum}\n${obj[maxNum]}`;
console.log(answer);
