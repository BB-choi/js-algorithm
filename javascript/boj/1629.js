// 1629 - 곱셈

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split(" ");

// let input = "10 11 12".toString().trim().split(" ");
// let input = "2 222 41".toString().trim().split(" ");
input = input.map(BigInt);
const [A, B, C] = input;

// a^(n + m) = a^n * a^m;
// (a * b) % c = (a % c * b % c) % c

let answer = 0n;

function solve(A, B, C) {
    if (B === 1n) {
        return A % C;
    }

    let tmp = solve(A, BigInt(B / 2n), C);

    if (B % 2n === 1n) {
        return (((tmp * tmp) % C) * A) % C;
    }

    return (tmp * tmp) % C;
}

answer = solve(A, B, C);
console.log(parseInt(answer));

/* // 연산을 할 때마다 c로 나눈 나머지로 값을 바꾸어 주어야 함
function solve(a, b, c) {
    let ret = 1n;
    while (b > 0n) {
        if (b % 2n === 1n) {
            ret *= a;
            ret %= c;
        }
        a *= a % c;
        a %= c;
        b = BigInt(parseInt(b / 2n));
    }
    return ret % c;
}

let answer = solve(A, B, C);
console.log(parseInt(answer));
 */
// reference
// https://st-lab.tistory.com/237
// https://debuglog.tistory.com/94
