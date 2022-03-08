// 외판원 순회 2
// https://www.acmicpc.net/problem/10971

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const N = Number(input.shift());
let w = [];
for (let i = 0; i < N; i++) {
  w[i] = [];
  w[i].push(...input[i].split(" ").map(Number));
}

// w[i][j] w[cur][to]
let visited = Array.from({ length: N }).fill(0);
let start;
let minCost = Number.MAX_SAFE_INTEGER;
function traverse(cur, cnt, cost) {
  if (cnt === N && w[cur][start] > 0) {
    minCost = Math.min(minCost, cost + w[cur][start]);
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    if (!w[cur][i]) continue;
    visited[i] = true;
    traverse(i, cnt + 1, cost + w[cur][i]);
    visited[i] = false;
  }
}

for (let i = 0; i < N; i++) {
  start = i;
  visited[i] = true;
  traverse(i, 1, 0);
  visited[i] = false;
}

console.log(minCost);

// reference
// https://gdlovehush.tistory.com/335
