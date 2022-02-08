// 땅따먹기
// https://programmers.co.kr/learn/courses/30/lessons/12913

function solution(lands) {
    let N = lands.length;
    let prevMaxIdx = -1;
    let sum = 0;

    for (let i = 1; i < N; i++) {
        for (let j = 0; j < 4; j++) {
            let max = Number.MIN_SAFE_INTEGER;
            for (let k = 0; k < 4; k++) {
                if (k !== j) {
                    max = Math.max(max, lands[i - 1][k]);
                }
            }
            lands[i][j] += max;
        }
    }
    console.log(lands);
    return Math.max(...lands[N - 1]);
}

console.log(
    solution([
        [1, 2, 3, 5],
        [5, 6, 7, 8],
        [4, 3, 2, 1],
    ])
);
