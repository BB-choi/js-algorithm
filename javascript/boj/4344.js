let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = [
//     "5",
//     "5 50 50 70 80 100",
//     "7 100 95 90 80 70 60 50",
//     "3 70 90 80",
//     "3 70 90 81",
//     "9 100 99 98 97 96 95 94 93 91",
// ];
input.shift();

const inputLen = input.length;
for (let x of input) {
    let arr = [];
    arr = x.toString().trim().split(" ");
    arr = arr.map(Number);
    let [avg, sum, cnt] = [0, 0, 0];
    for (let i = 1; i <= arr[0]; i++) {
        sum += arr[i];
    }
    avg = sum / arr[0];
    for (let i = 1; i <= arr[0]; i++) {
        if (arr[i] > avg) cnt++;
    }
    // console.log(arr, avg, sum, cnt);
    // 소숫점 자리수 제한 : toFixed
    console.log(((cnt / arr[0]) * 100).toFixed(3) + "%");
}
