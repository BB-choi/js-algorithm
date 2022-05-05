// 수열 추측하기

function solution(n, f) {
  let answer = [];
  let combination = [];

  let dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  function getCombination(n, r) {
    if (!r || n === r) {
      return 1;
    }

    if (!dp[n][r]) {
      dp[n][r] = getCombination(n - 1, r - 1) + getCombination(n - 1, r);
    }

    return dp[n][r];
  }

  for (let i = 0; i < n; i++) {
    combination[i] = getCombination(n - 1, i);
  }

  let p = [];
  let visited = Array.from({ length: n }, () => 0);
  // let flag = 0;
  function DFS(L, sum) {
    // if (flag) {
    //   return;
    // }
    // if (L === n && sum === f) {
    //   answer = [...p];
    //   flag = 1;
    // }
    if (L === n) {
      if (!answer.length && sum === f) {
        answer = [...p];
      }
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        p[L] = i;
        DFS(L + 1, sum + combination[L] * p[L]);
        visited[i] = 0;
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
