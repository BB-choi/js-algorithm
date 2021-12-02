// 1003 -피보나치 함수

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "3\n0\n1\n3".toString().trim().split("\n");
input = input.map(Number);

let T = input[0];
input.shift();

// dp0 0의 개수
// dp1 1의 개수
let dp0 = [];
let dp1 = [];

dp0[0] = 1;
dp0[1] = 0;

dp1[0] = 0;
dp1[1] = 1;

for (let i = 2; i < 41; i++) {
    dp0[i] = dp0[i - 1] + dp0[i - 2];
    dp1[i] = dp1[i - 1] + dp1[i - 2];
}

for (let i = 0; i < T; i++) {
    console.log(dp0[input[i]], dp1[input[i]]);
}

// 0, 1 개수 확인용
/* let N = 3;

let cnt1 = 0;
let cnt2 = 0;
function fibo(n) {
    if (n === 0) {
        cnt1++;
        return 0;
    } else if (n === 1) {
        cnt2++;
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
}

T = 21;
while (T--) {
    cnt1 = 0;
    cnt2 = 0;
    console.log(T, "-----------------------");
    fibo(T);
    console.log(cnt1, cnt2);
}
 */
