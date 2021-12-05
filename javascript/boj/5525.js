// 5525 - IOIOI

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "1\n13\nOOIOIOIOIIOII".toString().trim().split("\n");
// let input = "2\n13\nOOIOIOIOIIOII".toString().trim().split("\n");
// let input = "1\n3\nIIO".toString().trim().split("\n");
// let input = "1\n4\nOIOI".toString().trim().split("\n");
let N = Number(input[0]);
let M = Number(input[1]); // 문자열길이
let S = input[2];

//////////////////////////////////////////////////
// dp로 풀이
// dp배열에 0으로 전부 값을 넣어 놓은 후
let dp = new Array(M).fill(0);
// count 초기화
let count = 0;
// IOI 가 p1 이므로 index 2로 시작
for (let i = 2; i < M; i++) {
    // 처음 : 인덱스 0, 1, 2 이렇게 3글자를 substring()으로 자름
    // substring(i-2, i + 1) : i-2에서, i + 1전까지 자른다.
    let tmp = S.substring(i - 2, i + 1);
    // 자른 글자가 IOI와 일치하면
    if (tmp === "IOI") {
        // dp[i]는 [i-2]값에 +1
        // dp[i]에 있는 값은 O의 갯수와 같다고 볼 수 있다.
        dp[i] = dp[i - 2] + 1;
    }
    // dp[i]에서 꺼낸 값이 N보다 크거나 같으면 count++
    if (dp[i] >= N) {
        count++;
    }
}
console.log(count);

//////////////////////////////////////////////////
// 50점
/* // N이 O의 갯수
let tempN = N;
let count = 0;
for (let i = 2; i < M; i++) {
    tempN = N;
    let j = i;
    while (S[j - 2] === "I" && S[j - 1] === "O" && S[j] === "I") {
        tempN--;
        j += 2;
        if (tempN === 0) {
            count++;
            tempN = N;
            break;
        }
    }
}

console.log(count); */

//////////////////////////////////////////////////
// 50점
/* 
let pN = "";
for (let i = 0; i <= N; i++) {
    if (i === N) {
        pN += "I";
    } else {
        pN += "IO";
    }
}

let count = 0;
let pos = S.indexOf(pN, 0);

while (pos !== -1) {
    count++;
    pos = S.indexOf(pN, pos + 2);
}
console.log(count); */

//////////////////////////////////////////////////
// .match()연습
// 정규표현식에 변수 넣기 new RegExp
/* // let regexPn = new RegExp(`${pN}`, "g");
// let result = S.match(regexPn); */
