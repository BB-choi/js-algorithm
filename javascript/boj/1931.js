// 1931 - 회의실 배정

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, ...arr] = input;

// 2차원 배열 변경 + Number로 변경
arr = arr.map((el) => el.split(" ").map(Number));

// 끝나는 시간이 빠른 기준으로 정렬
// 만약 끝나는 시간이 같다면, 시작시간이 빠른 순으로 정렬
arr.sort(
    (a, b) => a[1] - b[1] || a[0] - b[0]
    // {
    //     if (a[1] === b[1]) {
    //         return a[0] - b[0];
    //     } else {
    //         return a[1] - b[1];
    //     }
    // }
);

// console.log(arr, arr.length - 1);

// 첫번째 선택된 회의의 종료시간
let temp = arr[0][1];
// 회의 수
let count = 1;

for (let i = 1; i < N; i++) {
    // temp의 종료시간과 i회의의 시작시간 비교
    if (temp <= arr[i][0]) {
        // 종료시간을 temp에 저장
        temp = arr[i][1];
        count++;
    }
}

console.log(count);

// reference
// https://kim6394.tistory.com/67
// https://ghost4551.tistory.com/9
