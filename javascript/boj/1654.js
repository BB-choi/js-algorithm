// 1654 - 랜선 자르기

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "4 11\n802\n743\n457\n539".toString().trim().split("\n");
let kn = input[0].trim().split(" ").map(Number);
const K = kn[0];
const N = kn[1];

// input[0] = "0";
input.shift();
let lans = input.map(Number);

let maxLan = 0;
for (let i = 0; i < K; i++) {
    maxLan += lans[i];
}
// 랜선을 모두 더한 후 N(개수)로 나눈다
// 이게 모든 랜선을 자를 수 있는 최대 길이
maxLan = Math.floor(maxLan / N);

function cut(lans, N, maxLan) {
    // 0으로 자르는 경우
    let left = 0;
    // let min = 1;
    // 오른쪽은 가장큰수
    let right = maxLan;
    let mid = Math.floor((left + right) / 2);
    let ans = 0;

    while (left <= right) {
        // 랜선 개수 n
        let n = 0;

        // mid를 반복문 돌 때마다 다시 구함
        mid = Math.floor((left + right) / 2);

        // 구해진 mid로 각 랜선을 잘라서 나오는 개수를 n에 더함
        lans.forEach((v, i) => {
            n += Math.floor(v / mid);
        });

        // n와 N을 비교
        if (n < N) {
            right = mid - 1;
        } else {
            ans = mid;
            left = mid + 1;
        }
    }
    console.log(ans);
}

cut(lans, N, maxLan);

// Reference
// https://jungeunpyun.tistory.com/73
