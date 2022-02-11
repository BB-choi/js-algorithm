// 토마토
// https://www.acmicpc.net/problem/7576

let filePath = "input.txt";
// filePath = "/dev/stdin"

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [M, N] = input[0].split(" ").map(Number);

let tomatos = Array(N);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

for (let i = 1; i <= N; i++) {
    tomatos[i - 1] = input[i].split(" ").map(Number);
}

function bfs() {
    let visited = Array.from(Array(N), () => Array(M).fill(0));
    let idx = 0;
    while (idx < queue.length) {
        const [curX, curY] = queue[idx]; // 그냥 shift()로 하면 시간초과
        for (let dir = 0; dir < 4; dir++) {
            let nx = curX + dx[dir];
            let ny = curY + dy[dir];
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (tomatos[nx][ny] === -1) continue; // 토마토가 들어있지 않은 경우 다음 탐색
            if (!visited[nx][ny]) {
                // queue.push([nx, ny]);
                // visited[nx][ny] = 1;
                if (!tomatos[nx][ny]) {
                    // 익지않은 토마토(0)가 들어있는 경우
                    // tomatos[nx][ny]를 1로 만들어서 익은 토마토로 만들어준다
                    tomatos[nx][ny] = tomatos[curX][curY] + 1;

                    queue.push([nx, ny]);
                    visited[nx][ny] = 1;
                }
            }
        }
        idx++;
    }
    return visited;
}

let queue = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (tomatos[i][j] === 1) {
            queue.push([i, j]);
        }
    }
}

// console.log(queue);

// console.log(tomatos);
// console.log(bfs());
// console.log(bfs(토마토처음찾은위치)); // 방문했는지 여부가 1, 0(방문안함, 빈 곳) 으로 return
// console.log(tomatos);

bfs();

let flag = 0;
let answer = 0;
for (let i = 0; i < N; i++) {
    let curMax = 0;
    for (let j = 0; j < M; j++) {
        if (!tomatos[i][j]) {
            answer = -1;
            flag = 1;
            break;
        }
        // max 찾기
        curMax = Math.max(curMax, tomatos[i][j]);
    }
    if (flag) break;
    answer = Math.max(answer, curMax);
}

if (answer > -1) answer -= 1;
console.log(answer);

// reference
// https://jae04099.tistory.com/233
