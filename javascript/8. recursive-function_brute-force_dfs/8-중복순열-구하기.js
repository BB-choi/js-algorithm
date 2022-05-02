// 중복순열 구하기

function solution(n, m) {
  let answer = [];
  let arr = [];

  function DFS(L) {
    if (L === m) {
      answer.push([...arr]);
      return;
    }
    for (let i = 1; i <= n; i++) {
      arr[L] = i;
      DFS(L + 1);
    }
  }

  DFS(0);
  console.log(answer.map((el) => el.join(" ")).join("\n"));
  console.log(answer.length);
}

solution(3, 2);
