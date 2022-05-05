// 팩토리얼

function solution(n) {
  function DFS(num) {
    if (num === 1) {
      return 1;
    }

    return num * DFS(num - 1);
  }

  return DFS(n);
}

console.log(solution(5));
