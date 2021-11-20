let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input;
// let arr = ["Hello", "Baekjoon", "Online Judge"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
