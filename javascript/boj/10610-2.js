// 30
// https://www.acmicpc.net/problem/10610

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim();
let answer = [-1];

if (input.includes("0")) {
  let nums = input.split("").map(Number);
  let sum = nums.reduce((a, b) => a + b);
  if (sum % 3 === 0) {
    answer = nums.sort((a, b) => b - a);
  }
}

console.log(answer.join(""));
