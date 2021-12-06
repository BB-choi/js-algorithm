let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 좌표 확인용
// let input = "5 5\n1 2 3 4 5\n6 7 8 9 0".toString().trim().split("\n");
// 테스트케이스
// let input = "5 5\n1 2 3 4 5\n5 4 3 2 1\n2 3 4 5 6\n6 5 4 3 2\n1 2 1 2 1"
//     .toString()
//     .trim()
//     .split("\n");
// let input = "4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5"
//     .toString()
//     .trim()
//     .split("\n");
// let input =
//     "4 10\n1 2 1 2 1 2 1 2 1 2\n2 1 2 1 2 1 2 1 2 1\n1 2 1 2 1 2 1 2 1 2\n2 1 2 1 2 1 2 1 2 1"
//         .toString()
//         .trim()
//         .split("\n");
// let input = "4 4\n0 0 0 0\n0 0 0 0\n0 1 2 3\n0 0 4 0"
//     .toString()
//     .trim()
//     .split("\n");
// let input = "4 4\n0 0 0 0\n0 0 0 0\n0 0 1 0\n0 2 3 4"
//     .toString()
//     .trim()
//     .split("\n");
// let input =
//     "5 10\n1 2 1 2 1 2 1 2 1 1\n2 1 2 1 2 1 2 1 2 1\n1 2 1 2 1 2 1 2 1 1\n2 1 2 1 2 1 1 10 10 10\n1 1 1 1 1 1 1 1 10 1"
//         .toString()
//         .trim()
//         .split("\n");

// 첫째줄에서 N, M 추출
let firstline = input.shift();
firstline = firstline.split(" ").map(Number);
const N = firstline[0];
const M = firstline[1];
// 배열에 담아 Math.max() 이용하기 위한 배열
let maxArr = [];

// (첫째줄 제외) 숫자가 적혀있는 종이 만들기
for (let i = 0; i < N; i++) {
    input[i] = input[i].split(" ").map(Number);
}

// temp는 a,b,c,d,e 테트로미노로 구한 합을 넣은 maxArr에서 각 도형 + 이전에 찾은 도형의 합 에서 max값을 임시로 저장했다가
// 다시 maxArr에 넣어서 다음 도형들로 구한 합과 비교하여 최대를 구할 것
let temp = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (i < N - 3) {
            // a1 : ㅡ
            let a1 =
                input[i][j] +
                input[i + 1][j] +
                input[i + 2][j] +
                input[i + 3][j];
            maxArr.push(a1);
        }
        if (j < M - 3) {
            // a2 : ㅣ
            let a2 =
                input[i][j] +
                input[i][j + 1] +
                input[i][j + 2] +
                input[i][j + 3];
            maxArr.push(a2);
        }
        // 현재까지 배열에 넣은 것 중에 가장 큰값을 temp에 저장
        temp = Math.max(...maxArr);
        // maxArr를 비우고
        maxArr = [];
        // temp만 maxArr에 담는다 (계속 반복)
        maxArr.push(temp);
        if (i < N - 1 && j < M - 1) {
            // b1 : ㅁ
            let b1 =
                input[i][j] +
                input[i][j + 1] +
                input[i + 1][j] +
                input[i + 1][j + 1];
            maxArr.push(b1);
        }

        temp = Math.max(...maxArr);
        maxArr = [];
        maxArr.push(temp);
        if (i < N - 2) {
            // c1 : ㅣ(3칸)가 일치하는 ㄱ, ㄴ
            let c1 = input[i][j] + input[i + 1][j] + input[i + 2][j];

            if (j < M - 1) {
                maxArr.push(c1 + input[i + 2][j + 1]);
                maxArr.push(c1 + input[i][j + 1]);
                // ㅣ로 3칸을 모두 구할 수 있으므로 e도 넣을 수 있다.
                // e1 ㅏ
                maxArr.push(c1 + input[i + 1][j + 1]); // e1
            }
            if (j - 1 >= 0) {
                maxArr.push(c1 + input[i][j - 1]);
                maxArr.push(c1 + input[i + 2][j - 1]);
                // e2 ㅓ
                maxArr.push(c1 + input[i + 1][j - 1]); // e2
            }
        }

        if (j < M - 2) {
            // c2 : ㅡ (3칸)가 일치하는 ㄱ, ㄴ
            let c2 = input[i][j] + input[i][j + 1] + input[i][j + 2];

            if (i - 1 >= 0) {
                maxArr.push(c2 + input[i - 1][j]);
                maxArr.push(c2 + input[i - 1][j + 2]);
                // e3 ㅗ
                maxArr.push(c2 + input[i - 1][j + 1]); // e3
            }
            if (i + 1 < N) {
                maxArr.push(c2 + input[i + 1][j]);
                maxArr.push(c2 + input[i + 1][j + 2]);
                // e4 ㅜ
                maxArr.push(c2 + input[i + 1][j + 1]); // e4
            }
        }

        temp = Math.max(...maxArr);
        maxArr = [];
        maxArr.push(temp);
        if (j < M - 1) {
            // d1 ㅡ (2칸)인 z
            let d1 = input[i][j] + input[i][j + 1];
            if (i < N - 1 && i - 1 >= 0) {
                maxArr.push(d1 + input[i + 1][j] + input[i - 1][j + 1]);
                maxArr.push(d1 + input[i + 1][j + 1] + input[i - 1][j]);
            }
        }
        if (i < N - 1) {
            //  d2 ㅣ (2칸)인 z
            let d2 = input[i][j] + input[i + 1][j];
            if (j - 1 >= 0 && j + 1 < M) {
                maxArr.push(d2 + input[i][j + 1] + input[i + 1][j - 1]);
                maxArr.push(d2 + input[i][j - 1] + input[i + 1][j + 1]);
            }
        }
    }
}

console.log(Math.max(...maxArr));
