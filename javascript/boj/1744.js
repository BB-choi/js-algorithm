// 수 묶기
// https://www.acmicpc.net/problem/1744

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs")
    .readFileSync(stdin)
    .toString()
    .trim()
    .split("\n")
    .map(Number);
const N = input[0];

let positive = [];
let negative = [];
let zero = [];

for (let i = 1; i <= N; i++) {
    if (input[i] > 0) {
        positive.push(input[i]);
    } else if (input[i] < 0) {
        negative.push(input[i]);
    } else {
        zero.push(input[i]);
    }
}

positive.sort((a, b) => a - b);
// 음수 * 음수 = 양수 큰 수
negative.sort((a, b) => b - a);

let sum = 0;
while (positive.length > 1) {
    if (
        positive[positive.length - 1] === 1 ||
        positive[positive.length - 2] === 1
    )
        break;
    sum += positive.pop() * positive.pop();
}
while (positive.length) {
    sum += positive.pop();
}
while (negative.length > 1) {
    sum += negative.pop() * negative.pop();
}
while (negative.length) {
    if (negative.length === 1 && zero.length) {
        sum += 0;
        break;
    }
    sum += negative.pop();
}

console.log(sum);
