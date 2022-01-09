// 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501

/* function solution(absolutes, signs) {
    let answer = 0;
    let len = absolutes.length;

    for (let i = 0; i < len; i++) {
        if (!signs[i]) {
            absolutes[i] *= -1;
        }
    }

    answer = absolutes.reduce((acc, cur) => acc + cur);

    return answer;
} */

function solution(absolutes, signs) {
    let answer = 0;
    answer = absolutes.reduce(
        (acc, cur, i) => acc + cur * (signs[i] ? 1 : -1),
        0
    );

    return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
