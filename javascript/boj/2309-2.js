// 일곱 난쟁이
// https://www.acmicpc.net/problem/2309

let stdin = "input.txt";
// stdin = "/dev/stdin"
let input = require("fs")
  .readFileSync(stdin)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = input.reduce((a, b) => a + b);
let answer = [];
let target = sum - 100;
let flag = false;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === target) {
      answer = input
        .filter((el) => el !== input[i] && el !== input[j])
        .sort((a, b) => a - b);
      flag = true;
      break;
    }
  }
  if (flag) {
    break;
  }
}

console.log(answer.join("\n"));
