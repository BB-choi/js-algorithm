// Reference
// https://blog.naver.com/uyon77/222559783194
// https://www.youtube.com/watch?v=OSRD1bs9Om8

let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let num = input;
// let num = 10;
let dp = [0, 0];
for (i = 2; i <= num; i++) {
    let [a, b, c] = [99999, 99999, 99999];
    if (i % 3 === 0) {
        a = dp[Math.floor(i / 3)];
    }
    if (i % 2 === 0) {
        b = dp[Math.floor(i / 2)];
    }
    c = dp[i - 1];

    dp[i] = Math.min(a, b, c) + 1;
}

console.log(dp[num]);
