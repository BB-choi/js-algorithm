// 수 이어 쓰기 1
// https://www.acmicpc.net/problem/1748

let path = "input.txt";
// path = "/dev/stdin";

let N = Number(require("fs").readFileSync(path).toString().trim());

let ans = 0;
// for (let i = 1; i <= N; i = i * 10) {
//   ans += N - i + 1;
// }

let cnt = 1;
while (cnt <= N) {
  ans += N - cnt + 1;
  cnt *= 10;
}

console.log(ans);
