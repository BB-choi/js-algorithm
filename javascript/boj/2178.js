// 미로 탐색
// https://www.acmicpc.net/problem/2178

let filePath = "input.txt";
// filePath = "/dev/stdin"
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let graph = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
for (let i = 1; i <= N; i++) {
    input[i] = input[i].split("").map(Number);
}

for (let i = 1; i <= N; i++) {
    for (let j = 0; j < M; j++) {
        graph[i][j + 1] = input[i][j];
    }
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let queue = [];
let visited = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
let path = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
let count = 0;

queue.push([1, 1]);
visited[1][1] = 1;
path[1][1] = 1;

while (queue.length) {
    let [curX, curY] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
        let nx = curX + dx[dir];
        let ny = curY + dy[dir];

        if (nx < 0 || nx > N || ny < 0 || ny > M) continue;
        if (visited[nx][ny] || !graph[nx][ny]) continue;

        queue.push([nx, ny]);
        visited[nx][ny] = 1;
        path[nx][ny] = path[curX][curY] + 1;
    }
}
console.log(path);
console.log(path[N][M]);
