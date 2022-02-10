// 섬의 개수
// https://www.acmicpc.net/problem/4963

let path = "input.txt";
// path = "/dev/stdin"

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let idx = 0;
let result = [];

let dx = [1, 0, -1, 0, -1, -1, 1, 1];
let dy = [0, 1, 0, -1, -1, 1, -1, 1];

while (idx < input.length) {
    // 섬의 개수
    let num = 0;

    const [M, N] = input[idx].split(" ").map(Number);
    idx++;
    let curLine;
    let graph = Array.from(Array(N), () => Array(M).fill(0));
    let visited = Array.from(Array(N), () => Array(M).fill(0));
    if (M === 0) break;

    // 그래프에 값 넣기(그래프 완성시키기)
    for (let i = 0; i < N; i++) {
        curLine = input[idx + i].split(" ").map(Number);
        for (let j = 0; j < M; j++) {
            graph[i][j] = curLine[j];
        }
    }

    // 탐색
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!graph[i][j] || visited[i][j]) continue;

            let queue = [];
            queue.push([i, j]);
            visited[i][j] = 1;
            num++;

            while (queue.length) {
                let [curX, curY] = queue.shift();
                for (let dir = 0; dir < 8; dir++) {
                    let nx = curX + dx[dir];
                    let ny = curY + dy[dir];

                    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                    if (visited[nx][ny] || !graph[nx][ny]) continue;
                    queue.push([nx, ny]);
                    visited[nx][ny] = 1;
                }
            }
        }
    }

    idx = idx += N;
    result.push(num);
}

console.log(result.join("\n"));

// reference
// 바킹독 [실전 알고리즘] 0x09강 - BFS
// https://blog.encrypted.gg/941
