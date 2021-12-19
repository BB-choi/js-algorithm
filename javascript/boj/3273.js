// 3273 - 두 수의 합

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n");

let n = Number(input[0].trim());
let arr = input[1].trim().split(" ").map(Number);
let x = Number(input[2].trim());
let cnt = 0;
// 이분탐색을 위한 오름차순 정렬
arr.sort((a, b) => a - b);

// indexOf로 찾을 경우 시간초과
// 이분 탐색으로 변경
for (let i = 0; i < n; i++) {
    let target = x - arr[i];

    let mid = parseInt(n / 2);
    let left = i + 1;
    let right = n;
    let result = 0;

    while (left <= right) {
        mid = parseInt((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            cnt++;
            break;
        } else {
            if (target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // if (arr[mid] > target) {
        //     right = mid - 1;
        // } else if (arr[mid] < target) {
        //     left = mid + 1;
        // } else {
        //     if (arr[mid]) {
        //         result = mid;
        //         // console.log(arr[mid], result, target);
        //         cnt++;
        //     }
        //     break;
        // }
    }
    // }
}

console.log(cnt);
