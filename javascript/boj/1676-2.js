// 팩토리얼 0의 개수
// https://www.acmicpc.net/problem/1676

let path = "input.txt";
// path = "/dev/stdin";

let input = Number(require("fs").readFileSync(path).toString().trim());

let dp = [];
dp[0] = BigInt(1);
function facto(num) {
  for (let i = 1; i <= num; i++) {
    dp[i] = dp[i - 1] * BigInt(i);
  }

  return dp[num];
}

const cur = facto(input).toString().split("").reverse().map(Number);
let count = 0;
for (let i = 0; i < cur.length; i++) {
  if (cur[i]) {
    break;
  }
  count++;
}

console.log(count);
