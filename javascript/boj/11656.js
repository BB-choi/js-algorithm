// 접미사 배열
// https://www.acmicpc.net/problem/11656

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim();
const len = input.length;

let answer = [];
let count = 0;
while (count <= len - 1) {
  answer.push(input.slice(count));
  count++;
}

answer.sort((a, b) => a.localeCompare(b));
console.log(answer.join("\n"));
