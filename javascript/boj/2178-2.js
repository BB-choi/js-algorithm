// 미로 탐색
// https://www.acmicpc.net/problem/2178

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const map = [];

for (let i = 1; i <= N; i++) {
  map[i - 1] = input[i].split("").map(Number);
}

const visited = Array.from(Array(N), () => Array(M).fill(0));
const count = Array.from(Array(N), () => Array(M).fill(0));

const direction = 4;
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const queue = [];

queue.push([0, 0]);
visited[0][0] = 1;
count[0][0] = 1;

function bfs() {
  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < direction; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX < 0 || newX >= N || newY < 0 || newY >= M) continue;
      if (visited[newX][newY] || !map[newX][newY]) continue;

      queue.push([newX, newY]);
      visited[newX][newY] = 1;
      count[newX][newY] = count[x][y] + 1;
    }
  }
}

bfs();
console.log(count[N - 1][M - 1]);
