// 경로 탐색(인접 행렬)

function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let visited = Array.from(Array(n + 1), () => 0);
    // let m = arr.length;
    let path = [];

    // for (let i = 0; i < m; i++) {
    //     let cur = arr[i];
    //     let [a, b] = cur;

    //     graph[a][b] = 1;
    // }

    for (const [a, b] of arr) {
        graph[a][b] = 1;
    }

    function DFS(v) {
        if (v === n) {
            answer++;
            console.log(path);
            return;
        }
        for (let i = 1; i <= n; i++) {
            // 갈 수 있는 노드인지 && 아직 방문하지 않았는지
            if (graph[v][i] === 1 && !visited[i]) {
                visited[i] = 1;
                path.push(i);

                DFS(i);
                visited[i] = 0;

                path.pop();
            }
        }
    }
    path.push(1);
    visited[1] = 1;
    DFS(1);
    return answer;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));
