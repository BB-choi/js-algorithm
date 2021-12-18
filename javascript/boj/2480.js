// 2480 - 주사위 세개

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split(" ")
//     .map(Number);

const [d1, d2, d3] = input;
let answer = 0;

if (d1 === d2 && d2 === d3) {
    answer = d1 * 1000 + 10000;
} else if (d1 === d2 || d1 === d3) {
    answer = d1 * 100 + 1000;
} else if (d2 === d3) {
    answer = d2 * 100 + 1000;
} else {
    answer = Math.max(d1, d2, d3) * 100;
}

console.log(answer);
