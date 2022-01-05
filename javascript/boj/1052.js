// 1052 - 물병

let path = "/dev/stdin";
// path = "input.txt";

let [N, K] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

function getCnt1(num) {
    let cnt1 = 0;

    // 시간초과
    // while (num > 0) {
    //     if (num % 2) {
    //         cnt1++;
    //     }
    //     num = parseInt(num / 2);
    // }

    let bin = num.toString(2);
    let len = bin.length;

    for (let i = 0; i < len; i++) {
        if (bin[i] === "1") {
            cnt1++;
        }
    }

    return cnt1;
}

function solution(N, K) {
    let num = N;
    let answer = 0;
    let cnt1 = 0;

    cnt1 = getCnt1(num);
    while (cnt1 > K) {
        cnt1 = getCnt1(++num);
    }

    answer = num - N;
    return answer;
}

console.log(solution(N, K));
