let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = ["4", "3", "0", "4", "0"];
// let input = ["10", "1", "3", "5", "4", "0", "0", "7", "0", "0", "6"];
input.shift();

let arr = [];
let result = [];
arr = input.map(Number);
let arrLen = arr.length;

for (let i = 0; i < arrLen; i++) {
    if (arr[i]) {
        result.push(arr[i]);
    } else {
        result.pop(arr[i - 1]);
    }
}

result = result.map(Number);
let resultLen = result.length;
let sum = 0;
for (let i = 0; i < resultLen; i++) {
    sum += result[i];
}
console.log(sum);
