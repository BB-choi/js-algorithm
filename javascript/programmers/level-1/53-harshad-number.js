// 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const sum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);

  if (!(x % sum)) {
    return true;
  }
  return false;
}
