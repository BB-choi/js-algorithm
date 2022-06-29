// 거의 소수
// https://www.acmicpc.net/problem/1456

let path = "input.txt";
// path = "/dev/stdin";

let [A, B] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const prime = new Array(10000001).fill(true);
let 거의소수 = 0;

prime[0] = false;
prime[1] = false;

const Eratos = (n) => {
  if (n <= 1) return;

  for (let i = 2; i * i <= n; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }
};

Eratos(10000000);

for (let i = 1; i <= Math.sqrt(B); i++) {
  if (prime[i]) {
    let j = i * i;
    while (j <= B) {
      if (j >= A) {
        거의소수++;
      }
      j *= i;
    }
  }
}

console.log(거의소수);
