function solution(m, nums) {
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        let target = m - nums[i];
        let j = i + 1;

        while (target && nums[j] && nums[j] <= target) {
            target -= nums[j];
            j++;
        }
        if (!target) {
            answer++;
        }
    }
    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
let arr = [1, 1, 1];
console.log(solution(2, arr));
arr = [3, 2, 1];
console.log(solution(2, arr));
