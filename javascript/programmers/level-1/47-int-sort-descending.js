// 정수 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    let answer = 0;
    let nums = [];
    while (n) {
        nums.push(n % 10);
        n = Math.floor(n / 10);
    }
    nums.sort((a, b) => a - b);
    console.log(nums);

    while (nums.length) {
        answer = answer * 10 + nums.pop();
    }
    return answer;
}

console.log(solution(118372));
