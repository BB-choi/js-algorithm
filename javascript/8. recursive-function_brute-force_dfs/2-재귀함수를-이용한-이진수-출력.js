// 재귀함수를 이용한 이진수 출력
function solution(n) {
  let answer = "";

  const dfs = (n) => {
    if (n < 2) {
      answer += n;
    } else {
      dfs(Math.floor(n / 2));
      answer += n % 2;
    }
  };

  dfs(n);
  return answer;
}

console.log(solution(11));
