// 2021은 무엇이 특별할까?
// https://www.acmicpc.net/problem/24039

let path = "input.txt";
// path = "/dev/stdin";

let N = Number(require("fs").readFileSync(path).toString().trim());

const nums = new Array(11000).fill(false);
const prime = new Array(104).fill(0).map((_, i) => i);
// 10000이 N의 최대값이므로  10000 다음의 소수 * 소수는 10403(101*103)

prime[0] = false;
prime[1] = false;

const eratos = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }
};

eratos(104);

const primeFilter = prime.filter((el) => el);
let num = 0;
while (1) {
  if (!primeFilter[num + 1]) {
    break;
  }

  nums[primeFilter[num] * primeFilter[num + 1]] = true;

  num++;
}

for (let i = N + 1; i <= nums.length; i++) {
  if (nums[i]) {
    console.log(i);
    break;
  }
}
