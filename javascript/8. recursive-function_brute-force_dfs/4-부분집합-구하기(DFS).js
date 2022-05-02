// 부분집합 구하기(DFS)

function solution(n) {
  let answer = [];
  let checkArr = Array.from({ length: n + 1 }, () => 0);
  const numbers = [...Array.from({ length: n + 1 }).keys()];

  function dfs(v) {
    if (v > n) {
      const curArr = numbers.filter((number) => checkArr[number]);
      if (curArr.length) {
        answer.push(curArr);
      }
      return;
    }

    checkArr[v] = 1;
    dfs(v + 1);

    checkArr[v] = 0;
    dfs(v + 1);
  }

  dfs(1, answer);
  return answer;
}

console.log(solution(3));
