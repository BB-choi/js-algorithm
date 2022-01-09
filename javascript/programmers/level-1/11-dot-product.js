// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    let answer = a.reduce((acc, cur, i) => {
        return acc + cur * b[i];
    }, 0);
    return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
