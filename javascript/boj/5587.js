// 카드 캡터 상근이
// https://www.acmicpc.net/problem/5587

let path = "input.txt";
// path = "/dev/stdin";

let [n, ...상근] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

상근.sort((a, b) => a - b); // 오름차순 정렬
const totalCardsCount = 2 * n;

const 근상 = Array.from(
  { length: totalCardsCount },
  (_, idx) => idx + 1
).filter((el) => !상근.includes(el));

const 낸카드 = [상근[0]];
상근[0] = 0;

let 상근점수 = 0;
let 근상점수 = 0;

let curPlayer = 근상;

while (1) {
  if (!상근.filter((el) => el).length || !근상.filter((el) => el).length) {
    상근점수 = 근상.filter((el) => el).length;
    근상점수 = 상근.filter((el) => el).length;
    break;
  }

  if (낸카드.length) {
    let 낼카드 = 0;
    let flag = false;

    for (let i = 0; i < n; i++) {
      if (curPlayer[i] <= 낸카드[낸카드.length - 1]) {
        continue;
      }

      낼카드 = curPlayer[i];
      if (낼카드 > 낸카드[낸카드.length - 1]) {
        curPlayer[curPlayer.indexOf(낼카드)] = 0;
        flag = true;
        break;
      }
    }

    if (!flag) {
      낸카드.length = 0;
    } else {
      낸카드.push(낼카드);
    }
  }

  if (낸카드.length === 0) {
    낼카드 = Math.min(...curPlayer);
    curPlayer[curPlayer.indexOf(낼카드)] = 0;
    낸카드.push(낼카드);
  }
  curPlayer = curPlayer == 상근 ? 근상 : 상근;
}

console.log(`${상근점수}\n${근상점수}`);
