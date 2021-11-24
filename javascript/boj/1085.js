let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

// let input = ["6", "2", "10", "3"];
// let input = ["1", "1", "5", "5"];
// let input = ["653", "375", "1000", "1000"];
let coords = input.map(Number);

let min = 10000;
let [x, y, w, h] = coords;

let n = 0;
if (x < min) min = x;
if (y < min) min = y;
if (h - y < min) min = h - y;
if (w - x < min) min = w - x;

console.log(min);
