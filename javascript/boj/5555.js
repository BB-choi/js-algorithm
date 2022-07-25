// 반지
// https://www.acmicpc.net/problem/5555

let path = "input.txt";
// path = "/dev/stdin";

let [target, N, ...str] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

console.log(str.filter((el) => (el + el).includes(target)).length);
