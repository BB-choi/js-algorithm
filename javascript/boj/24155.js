// 得点 (Score)
// https://www.acmicpc.net/problem/24155

let path = "input.txt";
// path = "/dev/stdin";

let [n, ...studentsScores] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const scores = [...studentsScores].sort((a, b) => b - a);

let answer = "";
// answer = studentsScores.reduce((prev, cur, idx) => {
//   return `${prev}${idx > 0 ? "\n" : ""}${scores.indexOf(cur) + 1}`;
// }, answer);

for (let i = 0; i < n; i++) {
  answer += `${scores.indexOf(studentsScores[i]) + 1}\n`;
}

console.log(answer);
