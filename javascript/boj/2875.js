// 대회 or 인턴
// https://www.acmicpc.net/problem/2875

let stdin = "input.txt";
// stdin = "/dev/stdin";

let [n, m, k] = require("fs")
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(" ")
    .map(Number);
let count = 0;
while (n >= 2 && m >= 1 && m + n - k >= 3) {
    n -= 2;
    m -= 1;
    count++;
}

console.log(count);
