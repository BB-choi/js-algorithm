// 송아지 찾기(BFS : 상태트리탐색)

function solution(s, e) {
  let answer = 0;

  const queue = [];
  const checked = [];
  function bfs() {
    while (queue.length) {
      const [cur, cnt] = queue.shift();

      if (cur === e) {
        answer = cnt;
        break;
      }

      if (cur > 10000 || cur < 0) {
        break;
      }

      if (!checked[cur + 1]) {
        queue.push([cur + 1, cnt + 1]);
        checked[cur + 1] = 1;
      }

      if (!checked[cur - 1]) {
        queue.push([cur - 1, cnt + 1]);
        checked[cur - 1] = 1;
      }

      if (!checked[cur + 5]) {
        queue.push([cur + 5, cnt + 1]);
        checked[cur + 1] = 1;
      }
    }
  }

  queue.push([s, 0]);
  checked[s] = 1;
  bfs();
  return answer;
}

function newSolution(s, e) {
  const checked = Array.from({ length: 10001 }, () => 0);
  const distance = Array.from({ length: 10001 }, () => 0);

  const queue = [];
  queue.push(s);
  checked[s] = 1;
  distance[s] = 0;

  while (queue.length) {
    const x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        return distance[x] + 1;
      }
      if (nx > 0 && nx <= 10000 && !checked[nx]) {
        checked[nx] = 1;
        queue.push(nx);
        distance[nx] = distance[x] + 1;
      }
    }
  }
}

console.log(solution(8, 3));
console.log(solution(5, 14));
console.log(newSolution(8, 3));
console.log(newSolution(5, 14));
