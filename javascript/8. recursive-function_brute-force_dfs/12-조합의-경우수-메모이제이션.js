// 조합의 경우수(메모이제이션)
function solution(n, r) {
  let answer;
  let dp = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

  function DFS(n, r) {
    if (!r || n === r) {
      return 1;
    }

    if (!dp[n][r]) {
      dp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
    }

    return dp[n][r];
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
