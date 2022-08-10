// 쿠키의 신체 측정
// https://www.acmicpc.net/problem/20125

let path = "input.txt";
// path = "/dev/stdin";

let [N, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

N = +N;

let 심장 = [];
let 측정 = [0, 0, 0, 0, 0]; // 왼팔 오른팔 허리 왼다리 오른다리
let 허리 = 0;

let 머리 = false;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === "_") {
      continue;
    }

    if (!머리) {
      머리 = true;
      심장 = [i + 2, j + 1];
      continue;
    }

    if (!측정[2] && j < 심장[1] - 1) {
      측정[0] = 측정[0] + 1;
    }

    if (!측정[2] && j > 심장[1] - 1) {
      측정[1] = 측정[1] + 1;
    }

    if (j === 심장[1] - 1) {
      if (i !== 심장[0] - 1) {
        측정[2] = 측정[2] + 1;
      }
    }

    if (측정[2] && j < 심장[1] - 1) {
      측정[3] = 측정[3] + 1;
    }

    if (측정[2] && j > 심장[1] - 1) {
      측정[4] = 측정[4] + 1;
    }
  }
}

console.log(`${심장.join(" ")}\n${측정.join(" ")}`);
