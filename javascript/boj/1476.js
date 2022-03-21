// 날짜 계산
// https://www.acmicpc.net/problem/1476

function gcd(a, b) {
    let c;
    while (b) {
        c = a % b;
        a = b;
        b = c;
    }

    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function getLCM(arr) {
    let cur = arr[0];

    for (let i = 1; i < arr.length; i++) {
        cur = lcm(cur, arr[i]);
    }

    return cur;
}

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs")
    .readFileSync(stdin)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

let [E, S, M] = input;
let year = 0;
while (++year) {
    if ((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0)
        break;
}

console.log(year);
