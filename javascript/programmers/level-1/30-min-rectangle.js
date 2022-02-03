// 최소 직사각형
// https://programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
    var answer = 0;
    let len = sizes.length;
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < sizes.length; i++) {
        sizes[i] = sizes[i].sort((a, b) => b - a);
        max1 = Math.max(max1, sizes[i][0]);
        max2 = Math.max(max2, sizes[i][1]);
    }

    answer = max1 * max2;
    return answer;
}

console.log(
    solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
    ])
);

console.log(
    solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15],
    ])
);

console.log(
    solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11],
    ])
);
