// 10807 - 개수 세기

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "11\n1 4 1 2 4 2 4 2 3 4 4\n2".toString().trim().split("\n");
// let input = "11\n1 4 1 2 4 2 4 2 3 4 4\n5".toString().trim().split("\n");

const N = Number(input[0].trim());
const arr = input[1].trim().split(" ").map(Number);
const v = Number(input[2].trim());

let cnt = 0;
for (let i = 0; i < N; i++) {
    if (arr[i] === v) {
        cnt++;
    }
}

console.log(cnt);
