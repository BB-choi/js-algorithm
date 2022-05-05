// 수들의 조합
function solution(n, k, arr, m) {
  let answer = 0;

  let p = Array.from({ length: k }, () => 0);
  function DFS(L, idx, sum) {
    if (L === k) {
      console.log(sum, p);
      if (!(sum % m)) {
        answer++;
      }
      return;
    }

    for (let i = idx; i < n; i++) {
      p[L] = arr[i];
      DFS(L + 1, i + 1, sum + arr[i]);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
