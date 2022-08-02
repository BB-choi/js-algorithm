// 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  var answer = [0, 0];

  let count = 0;
  while (s !== "1") {
    count++;
    const len = s.length;
    const zero = s.split("0").length - 1;

    answer[1] += zero;

    const result = len - zero;
    s = result.toString(2);
  }

  answer[0] = count;

  return answer;
}
