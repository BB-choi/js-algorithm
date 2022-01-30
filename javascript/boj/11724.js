// 연결 요소의 개수
// https://www.acmicpc.net/problem/11724

let path = "input.txt";
path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((el) => el.split(" ").map(Number));
let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
let visited = Array.from(Array(N + 1).fill(0));
let cnt = 0;

for (let [a, b] of arr) {
    graph[a][b] = 1;
    graph[b][a] = 1;
}

function DFS(V) {
    for (let i = 1; i <= N; i++) {
        if (graph[V][i] && !visited[i]) {
            visited[i] = 1;
            DFS(i);
        }
    }
}

for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        visited[i] = 1;
        DFS(i);
        cnt++;
    }
}

console.log(cnt);
