// 애너그램 만들기
// https://www.acmicpc.net/problem/1919

let stdin = "input.txt";
// stdin = "/dev/stdin";

const input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const [a, b] = input.map((el) => el.trim().split(""));
const lenA = a.length;
const lenB = b.length;

let count = lenA + lenB;
for (let i = 0; i < lenA; i++) {
  for (let j = 0; j < lenB; j++) {
    if (a[i] === b[j] && a[i] && b[j]) {
      count -= 2;
      a[i] = 0;
      b[j] = 0;
    }
  }
}

console.log(count);
