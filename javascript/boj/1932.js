// 1932 - 정수 삼각형

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [n, ...triangle] = input;
n = +n;
triangle = triangle.map((el) => el.trim().split(" ").map(Number));

let result = [];
result[0] = triangle[0];

// 삼각형 각 줄을 탐색하면서 합을 저장하는 result[]에 값을 넣는데,
// 그냥 넣지말고(그냥 넣으면 배열 길이가 2배씩 늘어남) 최대값을 구해서 넣음(else) --> 이 부분을 잘못해서 풀이 시간을 낭비함
if (n > 0) {
    for (let i = 1; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0) {
                // 현재 줄의 첫번째 요소
                result[i].push(result[i - 1][j] + triangle[i][j]);
            } else if (i === j) {
                // 현재 줄의 마지막 요소
                result[i].push(result[i - 1][j - 1] + triangle[i][j]);
            } else {
                result[i].push(
                    Math.max(result[i - 1][j - 1], result[i - 1][j]) +
                        triangle[i][j]
                );
            }
        }
    }
}
// console.log(result);

console.log(Math.max(...result[n - 1]));

// reference
// https://nyang-in.tistory.com/m/269
