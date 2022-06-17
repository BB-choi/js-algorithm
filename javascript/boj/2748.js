// 피보나치 수 2
// https://www.acmicpc.net/problem/2748

let path = "input.txt";
// path = "/dev/stdin";

let n = Number(require("fs").readFileSync(path).toString().trim());

let nums = [];
nums[0] = BigInt(0);
nums[1] = BigInt(1);
if (n >= 2) {
  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
}

console.log(nums[n].toString());
