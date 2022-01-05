// 10757 - 큰 수 A+B

let path = "/dev/stdin";
// path = "input.txt";

let [A, B] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map((el) => el.split("").reverse().map(Number));

let lenA = A.length;
let lenB = B.length;

let maxLen = lenA > lenB ? lenA : lenB;
if (lenA !== lenB) {
    let cnt = 0;
    if (lenA > lenB) {
        while (lenA > lenB + cnt) {
            B.push(0);
            cnt++;
        }
    } else {
        cnt = 0;
        while (lenB > lenA + cnt) {
            A.push(0);
            cnt++;
        }
    }
}

let carry = 0;
let result = [];
for (let i = 0; i < maxLen; i++) {
    let curCarry = 0;
    let sum = 0;

    curCarry = A[i] + B[i] + carry >= 10 ? 1 : 0;
    sum =
        A[i] + B[i] + carry >= 10
            ? A[i] + B[i] + carry - 10
            : A[i] + B[i] + carry;

    result.push(sum);
    carry = curCarry;
}
if (carry) {
    result.push(carry);
}

console.log(result.reverse().join(""));
