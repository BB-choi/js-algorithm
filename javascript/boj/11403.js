// 경로 찾기
// https://www.acmicpc.net/problem/11403

let stdin = "input.txt";
// stdin = "/dev/stdin"

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const N = Number(input[0]);

const graph = [];
const visited = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 1; i <= N; i++) {
  graph[i - 1] = input[i].split(" ").map(Number);
}

function DFS(x, y) {
  visited[x][y] = 1;
  for (let i = 0; i < N; i++) {
    if (graph[y][i] && !visited[x][i]) {
      DFS(x, i);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] && !visited[i][j]) {
      DFS(i, j);
    }
  }
}
console.log(visited.map((el) => el.join(" ")).join("\n"));
