// 11104 - Fridge Of Your Dreams

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let len = Number(input[0]);
input.shift();

for (let i = 0; i < len; i++) {
    console.log(parseInt(input[i], 2));
}
