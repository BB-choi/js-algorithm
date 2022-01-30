// 순열 사이클
// https://www.acmicpc.net/problem/10451

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const T = Number(input[0]);
let arr = [];

function initGraph(num) {
    let graph = Array.from(Array(num), () => Array(num).fill(0));
    return graph;
}

function initVisited(num) {
    return Array.from({ length: num }).fill(0);
}

// arr생성
for (let i = 1; i < input.length; i += 2) {
    arr.push(input.slice(i, i + 2));
}
// Number()
for (let i = 0; i < T; i++) {
    arr[i][0] = Number(arr[i][0]);
    arr[i][1] = arr[i][1].toString().split(" ").map(Number);
}

for (let i = 0; i < T; i++) {
    let [N, nodes] = arr[i];
    let graph = initGraph(N + 1);
    let visited = initVisited(N + 1);
    let cycle = 0;

    function DFS(v) {
        for (let j = 1; j <= N; j++) {
            if (graph[v][j] && !visited[j]) {
                visited[j] = 1;
                DFS(j);
            } else if (graph[v][j] && visited[j]) {
                cycle++;
            }
        }
    }

    // 그래프에 표시하기
    for (let v = 0; v < N; v++) {
        let a = v + 1;
        let b = nodes[v];
        graph[a][b] = 1;
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            DFS(i);
        }
    }

    console.log(cycle);
}
