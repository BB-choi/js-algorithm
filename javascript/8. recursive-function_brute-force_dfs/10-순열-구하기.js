// 순열 구하기

function solution(m, arr) {
  let answer = [];
  let visited = Array.from({ length: arr.length }, () => 0);
  let temp = Array.from({ length: m }, () => 0);
  const N = arr.length;

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        temp[L] = arr[i];
        DFS(L + 1);
        visited[i] = 0;
      }
    }
  }

  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));
