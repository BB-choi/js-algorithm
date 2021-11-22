// let input = ["5 5\n5 7\n7 5"].toString().trim().split("\n");
let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// input = ["5 5", "5 7", "7 5"];

// let input = ["5 5", "5 7", "7 5"];
let arr = input.toString().split(" ").toString().split(",").map(Number);
// let arr = ["5", "5", "5", "7", "7", "5"];.
// arr = arr.map(Number);

// let arrX = [arr[0], arr[2], arr[4]];
// let arrY = [arr[1], arr[3], arr[5]];

console.log(
    `${arr[0] === arr[2] ? arr[4] : arr[2] === arr[4] ? arr[0] : arr[2]}`,
    `${arr[1] === arr[3] ? arr[5] : arr[3] === arr[5] ? arr[1] : arr[3]}`
);
