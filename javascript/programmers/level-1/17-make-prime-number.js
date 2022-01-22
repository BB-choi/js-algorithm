// 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function solution(nums) {
    let len = nums.length;
    let sum = 0;
    let cnt = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) cnt++;
            }
        }
    }

    return cnt;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
