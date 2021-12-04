// 9184 - 신나는 함수 실행
// 메모이제이션

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 예시 입력
// let input = "1 1 1\n2 2 2\n10 4 6\n50 50 50\n-1 7 18\n-1 -1 -1"
//     .toString()
//     .trim()
//     .split("\n");
input.pop();

// w() 역할을 하는 함수
function wFunc(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        // 바로 함수를 종료
        return 1;
    }
    if (a > 20 || b > 20 || c > 20) {
        // w[a][b][c]에 값 대입해주고 return
        return (w[a][b][c] = wFunc(20, 20, 20));
    }
    if (w[a][b][c] > 0) {
        // 값이 있으면 그 값을 꺼내쓰기
        return w[a][b][c];
    }
    if (a < b && b < c) {
        return (w[a][b][c] =
            wFunc(a, b, c - 1) + wFunc(a, b - 1, c - 1) - wFunc(a, b - 1, c));
    } else {
        return (w[a][b][c] =
            wFunc(a - 1, b, c) +
            wFunc(a - 1, b - 1, c) +
            wFunc(a - 1, b, c - 1) -
            wFunc(a - 1, b - 1, c - 1));
    }
}

// 다차원 배열 만들기
let w = new Array(51);
for (let i = 0; i <= 50; i++) {
    w[i] = new Array(51);
    for (let j = 0; j <= 50; j++) {
        w[i][j] = new Array(51);
    }
}

// 0으로 채워놓기
for (let i = 0; i < 51; i++) {
    for (let j = 0; j < 51; j++) {
        for (let k = 0; k < 51; k++) {
            w[i][j][k] = 0;
        }
    }
}

// 테스트
// console.log(wFunc(1, 1, 1));
// console.log(wFunc(2, 2, 2));
// console.log(wFunc(10, 4, 6));
// console.log(wFunc(50, 50, 50));
// console.log(wFunc(-1, 7, 18));
// console.log(wFunc(15, 15, 15));

for (let x of input) {
    let nums = x.toString().trim().split(" ");
    // 숫자로 바꿔주지 않으면 결과가 다르게 나옴 .map(Number)
    nums = nums.map(Number);
    console.log(
        `w(${nums[0]}, ${nums[1]}, ${nums[2]}) = ${wFunc(
            nums[0],
            nums[1],
            nums[2]
        )}`
    );
}
