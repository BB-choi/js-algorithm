let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = ["5", "0 4", "1 2", "1 -1", "2 2", "3 3"];
input.shift();
input = input.map((x) => x.split(" ").map(Number));
input.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
console.log(input.join("\n").replace(/,/g, " "));
