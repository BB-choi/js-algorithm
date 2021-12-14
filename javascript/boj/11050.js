// 11050 - 이항 계수 1
// N C M 구하기
// N! / (M! * (N-M)!)

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

// let input = "5 2".toString().trim().split(" ");
// let input = "1 0".toString().trim().split(" ");
const N = Number(input[0]);
const M = Number(input[1]);

function facto(n) {
    if (n <= 1) {
        return 1;
    }
    return n * facto(n - 1);
}

let result = parseInt(facto(N) / (facto(M) * facto(N - M)));
console.log(result);
