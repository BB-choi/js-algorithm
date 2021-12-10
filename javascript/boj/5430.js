// 5430 - AC

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 테스트 케이스
// let input = "4\nRDD\n4\n[1,2,3,4]\nDD\n1\n[42]\nRRD\n6\n[1,1,2,3,5,8]\nD\n0\n[]"
//     .toString()
//     .trim()
//     .split("\n");
// let input = "1\nD\n1\n[42]".toString().trim().split("\n");
// let input = "3\nD\n0\n[]\nR\n0\n[]\nR\n0\n[]".toString().trim().split("\n");
// let input = "1\nRRRRRRDRRRDD\n3\n[1,2,3]".toString().trim().split("\n");
// let input = "1\nR\n0\n[]".toString().trim().split("\n");
let T = Number(input[0].trim());

// R함수는 reverse()하는 횟수만 기억하고 홀수인 경우에만 마지막에 한 번 reverse()해주면 되므로 필요하지 않음

function ftD() {
    // result : d함수(맨앞의 요소를 빼내기)가 가능한지 여부를 반환하기 위함
    let result = 1;
    if (revIdx + 1 - idx > 0) {
        if (ftRCnt % 2 === 0) {
            idx++;
        } else if (ftRCnt % 2 === 1) {
            // reverse()를 수행해야 하는 홀수인경우 맨 앞의 요소를 빼내는 d()는 결국, 맨 뒤의 요소를 빼내는 것과 같으므로
            revIdx--;
        }
    } else {
        return 0;
    }
    return result;
}

function run(ftArr, arr) {
    let ftArrLen = ftArr.length;
    let answer = [];
    revIdx = arr.length - 1;
    ftRCnt = 0;
    for (i = 0; i < ftArrLen; i++) {
        // R함수 호출 횟수는 ftRCnt로 기록만 해 줌
        if (ftArr[i] === "R") {
            ftRCnt++;
        } else if (ftArr[i] === "D") {
            let result = ftD();
            if (!result) {
                console.log("error");
                return;
            }
        }
    }
    answer = arr.slice(idx, revIdx + 1);
    // ftRCnt가 홀수인 경우에만 딱 한번 뒤집어 주면 된다
    if (ftRCnt % 2 === 1) {
        answer.reverse();
    }
    // console.log(answer)하는 경우에는 [1, 2, 3] 과 같이 공백이 들어가게 되므로
    console.log(`[${answer.join(",")}]`);
}

let idx = 0;
let revIdx = 0;
let ftRCnt = 0;
for (let i = 1; i < T * 3 - 1; i += 3) {
    let p = input[i].trim();
    let arr = input[i + 2].trim();
    arr = arr.substring(1, arr.length - 1).trim();
    arr = arr.split(",");
    if (arr.length === 1 && arr[0] === "") {
        arr = [];
    } else {
        arr = arr.map(Number);
    }
    idx = 0;
    run(p, arr);
}
