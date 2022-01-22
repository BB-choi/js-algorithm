// 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(nums) {
    let answer = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (answer[answer.length - 1] !== nums[i]) {
            answer.push(nums[i]);
        }
    }

    return answer;
}

function newSolution(nums) {
    let answer = [];
    answer = nums.filter((el, i) => el !== nums[i + 1]);

    return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
console.log(newSolution([1, 1, 3, 3, 0, 1, 1]));
console.log(newSolution([4, 4, 4, 3, 3]));
