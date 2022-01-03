// 10867 - 중복 빼고 정렬하기

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, nums] = input;
N = +N;
let arr = nums.split(" ").map(Number);
// console.log(arr);

// set으로 중복제거 후 오름차순 정렬
console.log([...new Set(arr)].sort((a, b) => a - b).join(" "));
