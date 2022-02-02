// 단지번호붙이기
// https://www.acmicpc.net/problem/2667

let path = "input.txt";
// path = "/dev/stdin"

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input.shift());
let visited = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
// 단지 수
let num = 0;
// 단지내 아파트 수
let apts = [];
input = input.map((el) => el.split("").map(Number));

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!input[i][j] || visited[i][j]) continue;
        // console.log(i, j);
        let queue = [];
        num++;
        queue.push([i, j]);
        visited[i][j] = 1;
        let apt = 0;
        while (queue.length) {
            apt++;
            let [curX, curY] = queue.shift();
            for (let dir = 0; dir < 4; dir++) {
                let nx = curX + dx[dir];
                let ny = curY + dy[dir];
                if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
                if (visited[nx][ny] || !input[nx][ny]) continue;
                queue.push([nx, ny]);
                visited[nx][ny] = 1;
            }
        }
        apts.push(apt);
    }
}
apts.sort((a, b) => a - b);

let result = num + "\n";
for (let i = 0; i < num; i++) {
    result += apts[i];
    result += "\n";
}
console.log(result);

// reference
// 바킹독 [실전 알고리즘] 0x09강 - BFS
// https://blog.encrypted.gg/941
