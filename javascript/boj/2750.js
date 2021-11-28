let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// input = "5\n5\n2\n3\n4\n1".toString().trim().split("\n");
input.shift();
input = input.map(Number);

input.sort((a, b) => a - b);

console.log(input.join("\n"));
