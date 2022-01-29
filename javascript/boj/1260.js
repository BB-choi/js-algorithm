// DFS와 BFS
// https://www.acmicpc.net/problem/1260

let path = "input.txt";
path = "/dev/stdin";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, M, V] = input[0].split(" ").map(Number);
let arr = input.slice(1).map((el) => el.split(" ").map(Number));
let graph = {};
for (const x of arr) {
    if (graph[x[0]]) graph[x[0]].push(x[1]);
    else graph[x[0]] = [x[1]];
    if (graph[x[1]]) graph[x[1]].push(x[0]);
    else graph[x[1]] = [x[0]];
}

for (const key in graph) {
    graph[key].sort((a, b) => a - b);
}

// BFS
let queue = [];
let visitedBFS = [];
queue.push(V);
while (queue.length) {
    let cur = queue.shift();
    if (!visitedBFS.includes(cur)) {
        visitedBFS.push(cur);
        if (graph[cur]) queue = [...queue, ...graph[cur]];
    }
}

//DFS
let stack = [];
let visitedDFS = [];
stack.push(V);
while (stack.length) {
    let cur = stack.shift();
    if (!visitedDFS.includes(cur)) {
        visitedDFS.push(cur);
        if (graph[cur]) stack = [...graph[cur], ...stack];
    }
}
console.log(visitedDFS.join(" "));
console.log(visitedBFS.join(" "));

// reference
// https://blog.encrypted.gg/941
// https://github.com/encrypted-def/basic-algo-lecture/blob/master/0x09/BFS.cpp
// https://blog.encrypted.gg/942
// https://velog.io/@sangbooom/JS-BFS-DFS
// https://velog.io/@lilyoh/js-object-%EC%9A%94%EC%86%8C%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B3%A0-%EC%88%9C%ED%9A%8C%ED%95%98%EA%B8%B0
