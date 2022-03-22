// 알파벳
// https://www.acmicpc.net/problem/1987

let stdin = "input.txt";
// stdin = "/dev/stdin"

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);

const board = [];
for (let i = 1; i <= R; i++) {
  board[i - 1] = input[i].trim().split("");
}

let visitedChar = new Array(26).fill(false);

function isAvailable([y, x]) {
  if (x < 0 || y < 0) return false;
  if (y >= R || x >= C) return false;
  return true;
}

let max = Number.MIN_SAFE_INTEGER;
function go([y, x], cnt) {
  if (cnt > max) {
    max = cnt;
  }

  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (
      isAvailable([ny, nx]) &&
      !visitedChar[board[ny][nx].charCodeAt() - "A".charCodeAt()]
    ) {
      visitedChar[board[ny][nx].charCodeAt() - "A".charCodeAt()] = 1;
      go([ny, nx], cnt + 1);
      visitedChar[board[ny][nx].charCodeAt() - "A".charCodeAt()] = 0;
    }
  }
}

visitedChar[board[0][0].charCodeAt() - "A".charCodeAt()] = true;
go([0, 0], 1);
console.log(max);
