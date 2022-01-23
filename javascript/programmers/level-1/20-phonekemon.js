// 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    let available = nums.length / 2;
    let unique = new Set(nums).size;

    if (unique >= available) {
        return available;
    }
    return unique;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
