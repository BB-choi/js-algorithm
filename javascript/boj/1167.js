// 트리의 지름
// https://www.acmicpc.net/problem/1167

let filePath = "input.txt";
// filePath = "dev/stdin";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const V = Number(input[0]);
const Nodes = [];
let visited = [];

// 트리의 지름
let d = 0;

for (let i = 1; i <= V; i++) {
    let cur = input[i].split(" ").map(Number);
    cur.pop(); // -1 삭제

    const vNum = cur[0];
    const len = cur.length - 1; // 첫번째(정점번호 vNum)은 뺀 길이
    Nodes[vNum] = [];

    for (let j = 1; j < len; j += 2) {
        Nodes[vNum].push([cur[j], cur[j + 1]]);
    }
}

// console.log(Nodes);
/* 
[
  <1 empty item>,
  [ [ 3, 2 ] ],
  [ [ 4, 4 ] ],
  [ [ 1, 2 ], [ 4, 3 ] ],
  [ [ 2, 4 ], [ 3, 3 ], [ 5, 6 ] ],
  [ [ 4, 6 ] ]
]
*/

// root의 자식 중 root와 가장 먼 것의 distance
function longest_child(root) {
    let mx1 = 0; // 가장 먼 dist
    let mx2 = 0; // 두번째로 먼 dist, d = max(d, mx1 + mx2) 로 갱신하기 위함

    const [node, nodeD] = [0, 1];
    for (let child of Nodes[root]) {
        if (visited[child[node]]) continue; // 이미 방문한 자식은 제외한다

        visited[child[node]] = 1; // 방문 기록
        let dist = longest_child(child[node]) + child[nodeD]; // 재귀로 처리
        if (dist > mx1) {
            mx2 = mx1;
            mx1 = dist;
        } else if (dist > mx2) {
            mx2 = dist;
        }
    }
    d = Math.max(d, mx1 + mx2);
    return mx1;
}

visited[1] = 1;
longest_child(1);
console.log(d);

// reference
// https://blog.encrypted.gg/143
// https://github.com/encrypted-def/BOJ/blob/master/1167.cpp
