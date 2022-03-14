// 스타트링크
// https://www.acmicpc.net/problem/5014

/* 
    F : 건물의 총 층 수
    S : 현재 강호의 위치
    G : 스타트링크의 위치
    U : 위로 U층을 가는 엘리베이터 버튼
    D : 아래로 D층을 가는 엘리베이터 버튼
*/

let stdin = "input.txt";
// stdin = "/dev/stdin";
const [F, S, G, U, D] = require("fs")
  .readFileSync(stdin)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let queue = [];
let visited = Array.from({ length: F + 1 }).fill(0);
let idx = 0;

queue.push([S, 0]);
visited[S] = 1;
let answer = -1;

while (idx < queue.length) {
  let [cur, cnt] = queue[idx];
  idx++;

  if (cur === G) {
    answer = cnt;
    break;
  }

  if (cur + U <= F && !visited[cur + U]) {
    queue.push([cur + U, cnt + 1]);
    visited[cur + U] = 1;
  }
  if (cur - D > 0 && !visited[cur - D]) {
    queue.push([cur - D, cnt + 1]);
    visited[cur - D] = 1;
  }
}

if (answer === -1) console.log("use the stairs");
else console.log(answer);
