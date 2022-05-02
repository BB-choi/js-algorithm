// 바둑이 승차(DFS)
function solution(c, arr) {
  let answer = 0;

  let sums = [];
  const limit = arr.length;
  function dfs(idx, sum) {
    if (sum > c) {
      return;
    }

    if (idx === limit) {
      sums.push(sum);
      return;
    }

    dfs(idx + 1, sum + arr[idx]);
    dfs(idx + 1, sum);
  }

  dfs(0, 0);

  answer = Math.max(...sums);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
