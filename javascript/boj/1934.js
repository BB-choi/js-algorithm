// 최소공배수
// https://www.acmicpc.net/problem/1934

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

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

const T = Number(input[0]);
let answer = "";
for (let i = 1; i <= T; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);
  answer += lcm(n1, n2) + "\n";
}

console.log(answer);
