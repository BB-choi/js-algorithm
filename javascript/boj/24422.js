// 投票 (Voting)
// https://www.acmicpc.net/problem/24422

let path = "input.txt";
// path = "/dev/stdin";

let [n, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

n = Number(n);

const 지난찬성수 = [];

for (let i = 0; i < n; i++) {
  const [X, Y] = arr[i].split(" ").map(Number);
  let j = i - 1;

  if (Y === X + 1) {
    지난찬성수[i] = 지난찬성수[j] !== undefined ? 지난찬성수[j] : 0;
    continue;
  }

  if (Y === 0) {
    지난찬성수[i] = 지난찬성수[j] ? 지난찬성수[j] + 1 : 1;
    continue;
  }

  if (지난찬성수[j] - (지난찬성수[j - X] ? 지난찬성수[j - X] : 0) >= Y) {
    지난찬성수[i] = 지난찬성수[j] ? 지난찬성수[j] + 1 : 1;
    continue;
  }

  지난찬성수[i] = 지난찬성수[j];
}

console.log(지난찬성수[n - 1]);
