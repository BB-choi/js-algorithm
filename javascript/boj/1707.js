// 이분 그래프
// https://www.acmicpc.net/problem/1707

let path = "input.txt";
path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
// K : 테스트 케이스 수
const K = Number(input[0]);
let idx = 1;

for (let i = 0; i < K; i++) {
    const [V, E] = input[idx++].split(" ").map(Number);
    let answer = "YES";
    let list = Array(V + 1);
    let flag = 1;
    for (let i = 0; i < list.length; i++) {
        list[i] = new Array();
    }
    let visited = Array(V + 1).fill(0);
    let curColor = 1;
    for (let j = 0; j < E; j++) {
        // idx++;
        const [a, b] = input[idx++].split(" ").map(Number);
        list[a].push(b);
        list[b].push(a);
    }

    const bfs = (v) => {
        let queue = [];
        visited[v] = 1;
        queue.push(v);
        while (queue.length) {
            let cur = queue.shift();
            for (const x of list[cur]) {
                if (!visited[x]) {
                    visited[x] = visited[cur] === 1 ? 2 : 1;
                    queue.push(x);
                } else if (visited[x] === visited[cur]) return false;
            }
        }
        return true;
    };

    for (let j = 1; j <= V; j++) {
        if (!visited[j]) {
            if (!bfs(j)) {
                flag = 0;
                break;
            }
        }
    }

    if (!flag) answer = "NO";

    console.log(answer);
}
