// 올림픽
// https://www.acmicpc.net/problem/8979

let path = "input.txt";
// path = "/dev/stdin";

let [[N, K], ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const score = [0, 3, 2, 1]; // x 금 은 동;
// const res = [];

// for (let i = 0; i < N; i++) {
//   const [cur, 금, 은, 동] = arr[i];
//   res.push([cur, 금 * score[1] + 은 * score[2] + 동 * score[3]]);
// }

arr.sort((a, b) => b[1] - a[1] || b[2] - a[2] || b[3] - a[3]);
let prevScore;
let prevCnt;
let rank = 0;

const answer = {};
arr.forEach((el) => {
  const [cur, ...score] = el;
  if (!prevScore) {
    prevScore = score;
    rank = 1;
    prevCnt = 1;
  } else {
    if (JSON.stringify(prevScore) === JSON.stringify(score)) {
      prevCnt++;
    } else {
      prevScore = score;
      rank += prevCnt;
      prevCnt = 1;
    }
  }
  answer[cur] = rank;
});

console.log(answer[K]);
