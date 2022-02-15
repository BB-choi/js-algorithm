// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    var answer = [];
    if (arr.length === 1) return [-1];

    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
