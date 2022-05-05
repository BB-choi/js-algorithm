// 동전교환

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  const N = arr.length;

  function dfs(count, sum) {
    if (sum > m || count >= answer) {
      return;
    }

    if (sum === m) {
      answer = Math.min(answer, count);
      return;
    }

    for (let i = 0; i < N; i++) {
      dfs(count + 1, sum + arr[i]);
    }
  }

  dfs(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
