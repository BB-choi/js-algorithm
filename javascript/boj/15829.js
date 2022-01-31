// Hashing
// https://www.acmicpc.net/problem/15829

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const L = Number(input[0]);
const M = 1234567891;
let nums = input[1].split("");
let alphabet = "a".charCodeAt();
const char = {};
for (let i = 1; i <= 26; i++) {
    char[String.fromCharCode(alphabet++)] = i;
}
for (let i = 0; i < L; i++) {
    nums[i] = char[nums[i]];
}

let pow = 1;
let result = nums.reduce((prev, cur, i) => {
    cur = cur * pow;
    pow *= 31;
    pow %= M;
    return (prev + cur) % M;
}, 0);
console.log(result);
