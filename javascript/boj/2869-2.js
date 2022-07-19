// 달팽이는 올라가고 싶다
// https://www.acmicpc.net/problem/2869

let path = "input.txt";
// path = "/dev/stdin";

let [A, B, V] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil((V - B) / (A - B)));
