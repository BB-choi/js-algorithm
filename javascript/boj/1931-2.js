// 회의실 배정
// https://www.acmicpc.net/problem/1931

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const N = Number(input[0]);
let times = [];
for (let i = 1; i <= N; i++) {
    times[i - 1] = input[i].split(" ").map(Number);
}

times.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
let endTime = times[0][1];
let count = 1;

for (let i = 1; i < N; i++) {
    if (endTime <= times[i][0]) {
        endTime = times[i][1];
        count++;
    }
}

console.log(count);
