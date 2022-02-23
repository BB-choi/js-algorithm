let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
input = input.map(Number);

let [a, b, n, w] = input;

let countA = 0;
let countB = 0;
countA++;
countB++;
w -= a;
w -= b;
let big = a > b ? a : b;
let small = a > b ? b : a;
while (w) {
    if (w % big === 0) {
        w -= big;
        big === a ? countA++ : countB++;
    } else if (w % small === 0) {
        w -= small;
        small === a ? countA++ : countB++;
    } else if (w > big) {
        w -= big;
        big === a ? countA++ : countB++;
    } else if (w > small) {
        w -= small;
        small === a ? countA++ : countB++;
    } else {
        break;
    }
}

if (countA + countB === n) {
    console.log(countA, countB);
} else {
    console.log(-1);
}
