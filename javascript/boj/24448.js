// 図書館 2 (Library 2)
// https://www.acmicpc.net/problem/24448

let path = "input.txt";
// path = "/dev/stdin";

let [Q, ...S] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

Q = Number(Q);
const arr = [];
let result = "";
const READ = "READ";

for (let i = 0; i < Q; i++) {
  if (S[i] === READ) {
    const currentBook = arr.pop();
    result += currentBook + "\n";
  } else {
    arr.push(S[i]);
  }
}

console.log(result);
