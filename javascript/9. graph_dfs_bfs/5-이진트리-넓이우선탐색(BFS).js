// 이진트리 넓이우선탐색(BFS)

function solution() {
    let list = Array(7 + 1);
    for (let i = 0; i < list.length; i++) {
        list[i] = new Array();
    }
    list[1] = [2, 3];
    list[2] = [4, 5];
    list[3] = [6, 7];
    let answer = "";
    let queue = [];
    let visited = [];
    let path = [];

    function dfs(v) {
        queue.push(v);
        visited[v] = 1;
        path.push(v);

        while (queue.length) {
            let cur = queue.shift();
            for (const x of list[cur]) {
                if (!visited[x]) {
                    queue.push(x);
                }
            }
        }
    }
    for (let i = 1; i <= 7; i++) {
        dfs(i);
    }
    return (answer = path.join(" "));
}

console.log(solution());

// 1 2
// 1 3
// 2 4
// 2 5
// 3 6
// 3 7
