// 나누어 떨어지는 숫자 배열
// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(nums, divisor) {
    let answer = [];
    answer = nums.filter((el) => el % divisor === 0);

    if (!answer.length) answer.push(-1);
    else answer.sort((a, b) => a - b);
    return answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
