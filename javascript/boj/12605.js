// 단어순서 뒤집기
// https://www.acmicpc.net/problem/12605

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const N = Number(input[0]);
const result = [];
for (let i = 1; i <= N; i++) {
  const cur = input[i].trim().split(" ");
  result[i - 1] = [`Case #${i}`, cur.reverse().join(" ")];
}

let answer = "";
for (let i = 0; i < result.length; i++) {
  answer += result[i].join(": ") + "\n";
}

console.log(answer);
