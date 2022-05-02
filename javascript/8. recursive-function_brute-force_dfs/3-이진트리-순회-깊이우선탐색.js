// 이진트리 순회(깊이우선탐색)

function solution(n) {
  let answer = "";

  const dfs = (num) => {
    if (num > 7) {
      return;
    }
    // 전위순회
    // answer += num;
    // dfs(num * 2);
    // dfs(num * 2 + 1);

    // 중위순회
    // dfs(num * 2);
    // answer += num;
    // dfs(num * 2 + 1);

    // 후위순회
    dfs(num * 2);
    dfs(num * 2 + 1);
    answer += num;
  };

  dfs(n);
  return answer;
}

console.log(solution(1));
