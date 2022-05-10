// 최솟값 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let answer = 0;

  const lenA = A.length;
  const lenB = B.length;
  
  answer = A.reduce((prev, cur, idx) => {
    return prev + cur * B[idx];
  }, 0);

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
