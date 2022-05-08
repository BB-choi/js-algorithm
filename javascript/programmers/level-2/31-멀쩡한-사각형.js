// 멀쩡한 사각형
// https://programmers.co.kr/learn/courses/30/lessons/62048

function gcd(a, b) {
  while (b) {
    let r = Math.floor(a % b);
    a = b;
    b = r;
  }

  return a;
}

function solution(w, h) {
  var answer = 1;
  const total = w * h;

  if (w === h) {
    answer = total - w;
  } else {
    const gcdNum = gcd(w, h);
    console.log(gcdNum);
    answer = total - (w + h - gcdNum);
  }

  return answer;
}

console.log(solution(8, 12));
