// 조합 구하기

function solution(n, m) {
  let answer = [];

  let cur = Array.from({ length: m }, () => 0);
  function DFS(L, startNum) {
    if (L === m) {
      answer.push([...cur]);
      return;
    }

    for (let i = startNum; i <= n; i++) {
      cur[L] = i;
      DFS(L + 1, i + 1);
    }
  }

  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
