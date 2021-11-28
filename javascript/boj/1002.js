// 두 원의 위치관계, 내접, 외접
// https://mathbang.net/101

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "3\n0 0 13 40 0 37\n0 0 3 0 7 4\n1 1 1 1 1 5"
//     .toString()
//     .trim()
//     .split("\n");
// 테스트케이스 수 제거
input.shift();
let len = input.length;

for (let i = 0; i < len; i++) {
    let arr = input[i].toString().trim().split(" ");
    arr = arr.map(Number);

    let [x1, y1, r1, x2, y2, r2] = arr;
    // 입력 처리 확인
    // console.log(x1, y1, r1, x2, y2, r2);

    // 합
    // let sum = (r1 > r2 ? r1 : r2) + (r1 < r2 ? r1 : r2);
    let sum = r1 + r2;
    // 차
    let sub = (r1 > r2 ? r1 : r2) - (r1 < r2 ? r1 : r2);
    // 중심점 간의 거리
    let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    // 무한인경우 (중심점, 지름 같음)
    // if (x1 === x2 && y1 === y2 && r1 === r2) console.log(-1);
    if (d === 0 && r1 === r2) {
        console.log(-1);
    }
    // 두 점이 접하는 경우
    else if (sub < d && d < sum) {
        console.log(2);
    }
    // 한 점이 접하는 경우
    // 합 === d 외접, 차 === d 내접
    else if (sum === d || sub === d) {
        console.log(1);
    }
    // 만나지 않는 경우
    // 외부, 내부, 동심원(한 원은 작다)
    else if (sum < d || sub > d || (d === 0 && r1 !== r2)) {
        console.log(0);
    }
}
