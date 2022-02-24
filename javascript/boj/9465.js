// 스티커
// https://www.acmicpc.net/problem/9465

let stdInput = "input.txt";
stdInput = "/dev/stdin";

let input = require("fs").readFileSync(stdInput).toString().trim().split("\n");
const T = Number(input[0]);
let answer = "";

for (let i = 1; i < input.length; i) {
    const n = Number(input[i++]);
    let arr = Array.from(Array(2), (el) => Array(n + 2).fill(0));

    // 입력대로 arr에 넣기
    let curIdx = 0;
    for (let j = 0; j < 2; j++) {
        let cur = input[i].split(" ").map(Number);
        i++;
        for (let k = 2; k < n + 2; k++) {
            arr[j][k] = cur[curIdx++];
        }
        curIdx = 0;
    }

    // dp처리
    let dp = [];
    for (let k = 2; k < n + 2; k++) {
        for (let j = 0; j < 2; j++) {
            if (j === 0) {
                arr[j][k] = Math.max(arr[1][k - 2], arr[1][k - 1]) + arr[j][k];
            }
            if (j === 1) {
                arr[j][k] = Math.max(arr[0][k - 2], arr[0][k - 1]) + arr[j][k];
            }
        }
    }

    answer += Math.max(arr[0][n + 1], arr[1][n + 1]) + "\n";
}

console.log(answer);
