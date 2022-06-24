// 과목선택
// https://www.acmicpc.net/problem/11948

let path = "input.txt";
// path = "/dev/stdin";

let [물리, 화학, 생물, 지구과학, 역사, 지리] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(
  [
    ...[물리, 화학, 생물, 지구과학].sort((a, b) => b - a).slice(0, 3),
    Math.max(역사, 지리),
  ].reduce((a, b) => a + b)
);
