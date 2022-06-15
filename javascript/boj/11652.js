// 카드
// https://www.acmicpc.net/problem/11652

let path = "input.txt";
// path = "/dev/stdin";

const [N, ...nums] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const count = new Map();

for (let i = 0; i < Number(N); i++) {
  if (count.has(nums[i])) {
    count.set(nums[i], count.get(nums[i]) + 1);
  } else {
    count.set(nums[i], 1);
  }
}

console.log(
  [...count.entries()].sort(
    (a, b) => b[1] - a[1] || (BigInt(a[0]) < BigInt(b[0]) ? -1 : 0)
  )[0][0]
);
