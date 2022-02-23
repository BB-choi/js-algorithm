let path = "/dev/stdin";
path = "input.txt";

let [N, K] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

function getCnt1(num) {
    let cnt1 = 0;

    let bin = num.toString(2);
    let len = bin.length;

    for (let i = 0; i < len; i++) {
        if (bin[i] === "1") {
            cnt1++;
        }
    }
    return cnt1;
}

let num = N;
let answer = 0;
let cnt1 = 0;

// cnt1 =
// console.log(num.toString(2).match(/1/g).length);

while (num.toString(2).match(/1/g).length > K) {
    if (num % 2) {
        num++;
    } else {
    }
}

// cnt1 = getCnt1(num);
// while (cnt1 > K) {
//     cnt1 = getCnt1(++num);
// }

answer = num - N;

console.log(answer);
