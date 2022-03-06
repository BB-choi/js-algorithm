// 차이를 최대로
// https://www.acmicpc.net/problem/10819

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

const result = [];
let output = [];
let visited = new Array(N).fill(0);

const permutation = (cnt, start) => {
    if (cnt === N) {
        result.push(calc(output));
        return;
    }

    for (let i = start; i < N; i++) {
        if (visited[i]) continue;

        visited[i] = 1;
        output[cnt] = arr[i];
        permutation(cnt + 1, 0);
        visited[i] = 0;
    }
};

const calc = (arr) => {
    let result = 0;
    for (let i = 1; i < N; i++) {
        result += Math.abs(arr[i - 1] - arr[i]);
    }
    return result;
};

let answer = 0;

permutation(0, 0);
answer = Math.max(...result);

console.log(answer);

// reference
// https://minusi.tistory.com/entry/%EC%88%9C%EC%97%B4-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Permutation-Algorithm
// https://amunre21.github.io/boj/3-15649/
// https://kimbangg.tistory.com/223?category=936036
