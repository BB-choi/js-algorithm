// 자기복제수
// https://www.acmicpc.net/problem/2028

let path = "input.txt";
// path = "/dev/stdin";

let arr = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = arr[0];
let answer = "";
for (let i = 1; i <= T; i++) {
  const str = (arr[i] ** 2).toString();
  const numstr = arr[i].toString();
  if (str.slice(-numstr.length) === numstr) {
    answer += "YES\n";
  } else {
    answer += "NO\n";
  }
}

console.log(answer);
