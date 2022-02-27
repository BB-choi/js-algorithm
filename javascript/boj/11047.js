// 동전 0
// https://www.acmicpc.net/problem/11047

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = Number(input[i].trim());
}

let curCoin = 0;
let curIdx = n - 1;
function findCoin(curMaxIdx) {
    let coin = 0;
    let idx = 0;
    for (let i = curMaxIdx; i >= 0; i--) {
        if (arr[i] <= k) {
            coin = arr[i];
            idx = i;
            break;
        }
    }
    return [coin, idx];
}

function findCnt(curCoin) {
    let count = 0;
    while (k >= curCoin) {
        k -= curCoin;
        count++;
    }
    return count;
}
let count = 0;

while (k) {
    [curCoin, curIdx] = findCoin(curIdx);
    count += findCnt(curCoin);
}
console.log(count);
