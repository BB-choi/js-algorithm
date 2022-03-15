// 소수 경로
// https://www.acmicpc.net/problem/1963

let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let answer = "";

let primeArr = [];
function eratos(n) {
  if (n <= 1) return;

  for (let i = 2; i <= n; i++) {
    primeArr[i] = 1;
  }

  for (let i = 2; i * i <= n; i++) {
    if (primeArr[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeArr[j] = 0;
      }
    }
  }
}
eratos(9999);

function findMinCnt(num1, num2) {
  let cnt = -1;
  let visited = [];
  let queue = [];

  queue.push([num1, 0]);
  let idx = 0;
  visited[num1] = true;

  while (idx < queue.length) {
    let [curNum, curCnt] = queue[idx];
    idx++;

    if (curNum === num2) {
      cnt = curCnt;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let numStr = curNum.toString();
      let numArr = numStr.split("");
      for (let j = 0; j <= 9; j++) {
        numArr[i] = j.toString();
        let n = Number(numArr.join(""));

        if (n === curNum) {
          continue;
        }

        if (n < 1000 || n > 9999 || !primeArr[n] || visited[n]) {
          continue;
        }

        queue.push([n, curCnt + 1]);
        visited[n] = true;
      }
    }
  }
  if (cnt < 0) {
    answer += "Impossible\n";
  } else {
    answer += cnt + "\n";
  }
}

for (let i = 1; i <= T; i++) {
  let [num1, num2] = input[i].split(" ").map(Number);
  findMinCnt(num1, num2);
}

console.log(answer);
