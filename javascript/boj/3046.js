// R2
// https://www.acmicpc.net/problem/3046

let stdin = "input.txt";
// stdin = "/dev/stdin";

let [R1, S] = require("fs")
  .readFileSync(stdin)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(2 * S - R1);
