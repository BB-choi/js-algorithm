// 피보나치 수
// https://programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 2] + fibo[i - 1]) % 1234567;
  }
  return fibo[n];
}

console.log(solution(3));
console.log(solution(5));
