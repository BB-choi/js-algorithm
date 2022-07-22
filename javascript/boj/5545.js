// 최고의 피자
// https://www.acmicpc.net/problem/5545

let path = "input.txt";
// path = "/dev/stdin";

let [N, [A, B], C, ...D] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) =>
    el.split(" ").length > 1 ? el.split(" ").map(Number) : Number(el)
  );

D.sort((a, b) => b - a);

let curPrice = A;
let curTotalKcal = C;
let curKcalPerWon = Math.floor(C / A);

for (let i = 0; i < N; i++) {
  let newPrice = curPrice + B;
  let newTotalKcal = curTotalKcal + D[i];
  let newKcalPerWon = Math.floor(newTotalKcal / newPrice);

  if (newKcalPerWon >= curKcalPerWon) {
    curPrice = newPrice;
    curTotalKcal = newTotalKcal;
    curKcalPerWon = newKcalPerWon;
  }

  if (newKcalPerWon < curKcalPerWon) {
    break;
  }
}

console.log(curKcalPerWon);
