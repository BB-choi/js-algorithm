let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "3\nhappy\nnew\nyear".toString().trim().split("\n");
// let input = "5\nab\naa\naca\nba\nbb".toString().trim().split("\n");
// let input = "2\nyzyzy\nzyzyz".toString().trim().split("\n");
// let input = "1\nz".toString().trim().split("\n");
input.shift();
// 그룹단어 수
let count = 0;

// 각 단어 길이저장
let len = 0;
// 각 단어안의 알파벳 갯수 세기
// 각 단어 길이와 알파벳 갯수가 일치 하지않으면 count에 포함하지 않음
let num = 0;

let chkArr = [];
for (let x of input) {
    chkArr = []; // x돌때마다 초기화
    for (let i = 0; i < x.length; i++) {
        if (x[i]) {
            if (i > 0) {
                if (x[i - 1] === x[i]) {
                    continue;
                }
            }
            chkArr.push(x[i]);
        }
    }
    // console.log(chkArr);
    num = chkArr.length;
    len = chkArr.length;
    for (let i = 0; i + 1 < chkArr.length; i++) {
        for (let j = i + 1; j < chkArr.length; j++) {
            if (chkArr[i] === chkArr[j]) {
                num--;
            }
        }
    }
    // console.log(len, num);
    if (num === len) {
        count++;
    }
}
console.log(count);
