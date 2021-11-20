let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = ["5", "3 4", "1 -101", "1 -100", "2 2", "3 3"];
input.shift();
input = input.map((x) => x.split(" ").map(Number));
input.sort((a, b) => a[0] - b[0] || a[1] - b[1]); // input : [Array(2), Array(2), Array(2), Array(2), Array(2)];
console.log(input.join("\n").replace(/,/g, " "));
