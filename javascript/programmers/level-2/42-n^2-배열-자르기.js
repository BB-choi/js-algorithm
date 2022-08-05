// n^2 배열 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  /*  let str = "";

  for (let i = 0; i < n; i++) {
    let j = i + 1;

    for (let k = 0; k < j; k++) {
      str += j;
    }

    for (let l = j; l < n; l++) {
      str += ++j;
    }
  }
  return str
    .slice(left, right + 1)
    .split("")
    .map(Number); */

  let answer = [];
  for (let i = left; i <= right; i++) {
    answer.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
