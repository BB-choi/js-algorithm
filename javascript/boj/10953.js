let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let arr = input;
// let arr = [5, [1, 1], [2, 3], [3, 4], [9, 8], [5, 2]];
let cal = [];

// 인덱스 0은 입력 갯수 이므로 1부터 처리
for (let i = 1; i <= arr[0]; i++) {
    cal = arr[i].toString().split(",");
    console.log(Number(cal[0]) + Number(cal[1]));
}
