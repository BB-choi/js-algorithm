let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];
input.shift();

let arr = input.toString().split(",");
arr.sort((a, b) => Number(a.split(" ")[0]) - Number(b.split(" ")[0]));
console.log(arr.join("\n").replace(/,/g, ""));
