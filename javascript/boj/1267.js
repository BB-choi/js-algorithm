// 1267 - 핸드폰 요금

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n");

let N = Number(input[0].trim());

let calls = input[1].trim().split(" ").map(Number);

let costY = 0;
let costM = 0;

for (let i = 0; i < N; i++) {
    costY += parseInt(calls[i] / 30 + 1) * 10;
    costM += parseInt(calls[i] / 60 + 1) * 15;
}

let answer = "";
if (costM > costY) {
    answer = `Y ${costY}`;
} else if (costM < costY) {
    answer = `M ${costM}`;
} else {
    answer = `Y M ${costM}`;
}

console.log(answer);
