// 다음 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  var answer = 0;
  const count = n.toString(2).split("1").length;

  let cpy = n + 1;
  while (!answer) {
    const cnt = cpy.toString(2).split("1").length;

    if (cnt === count) {
      return cpy;
    }
    cpy++;
  }
}
