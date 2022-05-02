// 최대점수 구하기(DFS)

function solution(m, ps, pt) {
  let answer = 0;
  const n = ps.length;
  const scoreArr = [];

  function dfs(idx, score, time) {
    if (time > m) {
      return;
    }

    if (idx === n) {
      scoreArr.push(score);
      return;
    }

    dfs(idx + 1, score + ps[idx], time + pt[idx]);
    dfs(idx + 1, score, time);
  }

  dfs(0, 0, 0);
  answer = Math.max(...scoreArr);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
