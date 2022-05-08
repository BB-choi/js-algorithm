// N개의 최소공배수

// 최대 공약수를 구한다
function gcd(a, b) {
  while (b) {
    let r = Math.floor(a % b);
    a = b;
    b = r;
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  var answer = 0;
  const len = arr.length;

  let num = arr[0];
  for (let i = 1; i < len; i++) {
    num = lcm(num, arr[i]);
  }

  answer = num;
  return answer;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
