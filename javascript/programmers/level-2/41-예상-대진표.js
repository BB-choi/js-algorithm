// 예상 대진표
// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let answer = 1;

  // while (Math.abs(a - b) !== 1 || Math.min(a, b) * 2 !== Math.max(a, b)) {
  const arr = [1];
  for (let i = 1; i < n / 2; i++) {
    arr.push(arr[i - 1] + 2);
  }
  while (Math.abs(a - b) !== 1 || !arr.includes(Math.min(a, b))) {
    answer++;

    if (a % 2) {
      a = (a + 1) / 2;
    } else {
      a = a / 2;
    }
    if (b % 2) {
      b = (b + 1) / 2;
    } else {
      b = b / 2;
    }
  }

  return answer;
}

console.log(solution(8, 4, 7));
console.log(solution(8, 1, 2));
console.log(solution(8, 2, 3));
