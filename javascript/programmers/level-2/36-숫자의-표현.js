// 숫자의 표현
// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      if (sum >= n) {
        break;
      }

      sum += j;
    }

    if (sum === n) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(15));
