// 평균 구하기
// https://programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    let answer = arr.reduce((a, b) => a + b, 0) / arr.length;

    return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
