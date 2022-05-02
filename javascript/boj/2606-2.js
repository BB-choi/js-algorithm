// 바이러스
// https://www.acmicpc.net/problem/2606

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const count = Number(input[0]);
const linkedCount = Number(input[1]);

let connectedComs = [];
let visited = [];

for (let i = 1; i <= count; i++) {
  connectedComs[i] = [];
  visited[i] = 0;
}

for (let i = 2; i < 2 + linkedCount; i++) {
  let [com1, com2] = input[i].split(" ").map(Number);

  connectedComs[com1].push(com2);
  connectedComs[com2].push(com1);
}

const dfs = (graph, startNode) => {
  const visited = [];
  let notVisited = [];

  notVisited.push(startNode);

  while (notVisited.length) {
    const node = notVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      notVisited = [...graph[node], ...notVisited];
    }
  }
  return visited;
};

console.log(dfs(connectedComs, 1).filter((el) => el !== 1).length);
