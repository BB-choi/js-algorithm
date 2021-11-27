let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 참고 : 파스칼 삼각형
// nCr = n! / r! * (n - r)!
// (층수 + 호수)C(호수-1)
// let input = "1\n14\n14".toString().trim().split("\n");
input.shift();
input = input.map(Number);
len = input.length;

const factorial = function (n) {
    let ans = 1;

    for (let i = n; i > 0; i--) {
        ans = ans * i;
    }
    return ans;
};
for (let i = 0; i < len; i = i + 2) {
    let n = input[i] + input[i + 1];
    let r = input[i + 1] - 1;
    let a = factorial(n);
    let b = factorial(r) * factorial(n - r);
    console.log(Math.round(a / b));
}
