// 1919 - 애너그램 만들기

let str = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 테스트 케이스
// let str = "aabbcc\nxxyybb".toString().trim().split("\n");
// let str = "a\nbcdef".toString().trim().split("\n");
// let str = "abbcccddddeeeee\neddcccbbbbaaaaa".toString().trim().split("\n");
// let str = "abb\nab".toString().trim().split("\n");

let str1Len = str[0].length;
let str2Len = str[1].length;

let cnt = 0;
let str1 = str[0];
let str2 = str[1];
// 첫번째 비교 str1 기준
// str1[i]가 str2에 들어있다면 str2에서 없앰,
// (같은 글자가 여러번 나오는 경우를 위해 없애야 한다.)
// 들어있지 않다면 없애야 할 숫자임
for (let i = 0; i < str1Len; i++) {
    if (str2.includes(str1[i])) {
        str2 = str2.replace(str1[i], "");
    } else {
        cnt++;
    }
}
// 다음비교를 위해 다시 원래 값을 넣어줌
// 두번째 비교 str2 기준
str1 = str[0];
str2 = str[1];
for (let i = 0; i < str2Len; i++) {
    if (str1.includes(str2[i])) {
        str1 = str1.replace(str2[i], "");
    } else {
        cnt++;
    }
}

console.log(cnt);
