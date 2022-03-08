// 숨바꼭질
// https://www.acmicpc.net/problem/1697

let stdin = "input.txt";
// stdin = "/dev/stdin";

const [N, K] = require("fs")
  .readFileSync(stdin)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let visited = [];
const queue = [];
queue.push([N, 0]);

while (queue.length) {
  const [cur, curSec] = queue.shift();
  const nextSec = curSec + 1;

  if (visited[cur]) continue;
  visited[cur] = true;
  if (cur === K) {
    console.log(curSec);
    break;
  }
  if (cur + 1 <= 100000 && !visited[cur + 1]) {
    queue.push([cur + 1, nextSec]);
  }
  if (cur - 1 >= 0 && !visited[cur - 1]) {
    queue.push([cur - 1, nextSec]);
  }

  if (cur * 2 <= 100000 && !visited[cur * 2]) {
    queue.push([cur * 2, nextSec]);
  }
}
