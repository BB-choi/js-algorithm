// 124 나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
    let nums = [4, 1, 2];
    var answer = "";

    while (n) {
        answer = nums[n % 3] + answer;
        if (n % 3 === 0) n = Math.floor(n / 3) - 1;
        else n = Math.floor(n / 3);
    }

    return answer;
}

console.log(solution(16));
