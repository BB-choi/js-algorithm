// 단어 정렬
// https://www.acmicpc.net/problem/1181

let path = "input.txt";
// path = "/dev/stdin";

let [num, ...words] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
// const N = Number(input[0]);

const set = new Set(words);

console.log(
  [...set].sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n")
);
