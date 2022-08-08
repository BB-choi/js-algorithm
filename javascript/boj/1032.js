// 명령 프롬프트
// https://www.acmicpc.net/problem/1032

let path = "input.txt";
// path = "/dev/stdin";

let [N, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

N = +N;
let answer = [];

for (let i = 0; i < N; i++) {
  const cur = arr[i];
  const len = cur.length;

  for (let j = 0; j < len; j++) {
    if (!answer[j]) {
      answer[j] = cur[j];
      continue;
    }

    if (answer[j] === "?") {
      continue;
    }

    if (answer[j] !== cur[j]) {
      answer[j] = "?";
      continue;
    }
  }
}

console.log(answer.join(""));
