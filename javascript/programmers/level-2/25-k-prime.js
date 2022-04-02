// k진수에서 소수 개수 구하기
// https://programmers.co.kr/learn/courses/30/lessons/92335

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  var answer = 0;

  const numK = n.toString(k).split("0");
  const newK = numK.filter((el) => el !== "");

  for (const num of newK) {
    if (isPrime(Number(num))) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
