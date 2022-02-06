// 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = [];
    let temp = [];
    const len = arr1.length;

    for (let i = 0; i < len; i++) {
        const leni = arr1[i].length;
        for (let j = 0; j < leni; j++) {
            temp.push(arr1[i][j] + arr2[i][j]);
        }
        if (temp.length === leni) {
            answer.push(temp);
            temp = [];
        }
    }
    return answer;
}

console.log(
    solution(
        [
            [1, 2],
            [2, 3],
        ],
        [
            [3, 4],
            [5, 6],
        ]
    )
);
console.log(
    solution(
        [
            [1, 2, 3],
            [2, 3, 4],
        ],
        [
            [3, 4, 5],
            [5, 6, 7],
        ]
    )
);

console.log(solution([[1], [2]], [[3], [4]]));
