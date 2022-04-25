// 사탕 게임
// https://www.acmicpc.net/problem/3085

let path = "input.txt";
// path = "/dev/stdin"

let input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);

const board = [];
for (let i = 1; i <= N; i++) {
  board[i - 1] = input[i].trim().split("");
}

function countRow() {
  let max = 0;
  let count = 0;
  let cur;
  for (let i = 0; i < N; i++) {
    count = 0;
    for (let j = 0; j < N; j++) {
      if (!cur || (cur && cur !== board[i][j])) {
        cur = board[i][j];
        count = 0;
      }
      if (cur === board[i][j]) {
        count++;
      }
      if (count > max) {
        max = count;
      }
    }
  }
  return max;
}

function countCol() {
  let max = 0;
  let count = 0;
  let cur;
  for (let i = 0; i < N; i++) {
    count = 0;
    for (let j = 0; j < N; j++) {
      if (!cur || (cur && cur !== board[j][i])) {
        cur = board[j][i];
        count = 0;
      }
      if (cur === board[j][i]) {
        count++;
      }
      if (count > max) {
        max = count;
      }
    }
  }
  return max;
}

// 행으로 바꾸기
let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    if (board[i][j] !== board[i][j + 1]) {
      let temp = board[i][j];
      board[i][j] = board[i][j + 1];
      board[i][j + 1] = temp;
      let curRowMax = countRow();
      let curColMax = countCol();
      let curMax = curRowMax >= curColMax ? curRowMax : curColMax;
      if (curMax > max) {
        max = curMax;
      }
      // 되돌려 놓기
      temp = board[i][j + 1];
      board[i][j + 1] = board[i][j];
      board[i][j] = temp;
    }
  }
}

// 열로 바꾸기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    if (board[j][i] !== board[j + 1][i]) {
      let temp = board[j][i];
      board[j][i] = board[j + 1][i];
      board[j + 1][i] = temp;
      let curRowMax = countRow();
      let curColMax = countCol();
      let curMax = curRowMax >= curColMax ? curRowMax : curColMax;
      if (curMax > max) {
        max = curMax;
      }
      // 되돌려 놓기
      temp = board[j][i];
      board[j][i] = board[j + 1][i];
      board[j + 1][i] = temp;
    }
  }
}

console.log(max);
