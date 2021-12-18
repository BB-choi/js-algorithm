// 2576 - 홀수

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n")
//     .map(Number);

let odds = [];
let sumOdd = 0;
for (let i = 0; i < 7; i++) {
    if (input[i] % 2 !== 0) {
        odds.push(input[i]);
        sumOdd += input[i];
    }
}

let answer = "";
if (!odds.length) {
    answer = "-1";
} else answer = `${sumOdd}\n${Math.min(...odds)}`;

console.log(answer);
