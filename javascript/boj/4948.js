// 베르트랑 공준
// https://www.acmicpc.net/problem/4948

let path = "input.txt";
// path = "/dev/stdin";

const [...nums] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "";
const len = nums.length;

const maxNum = 123456 * 2 + 1;
const primes = Array.from({ length: maxNum }).fill(true);
primes[0] = false;
primes[1] = false;

for (let i = 2; i <= maxNum; i++) {
  if (primes[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      primes[j] = false;
    }
  }
}

for (let i = 0; i < len; i++) {
  const current = nums[i];
  if (current === 0) {
    break;
  }
  answer += `${
    primes.filter((el, idx) => el && idx > current && idx <= current * 2).length
  }\n`;
}

console.log(answer);
