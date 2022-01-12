// 1. Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1
var twoSum = function (nums, target) {
    let answer = [];
    let len = nums.length;
    let numsMap = new Map();

    for (let i = 0; i < len; i++) {
        let key = target - nums[i];

        if (numsMap.has(key)) {
            answer = [numsMap.get(key), i];
            return answer;
        }
        numsMap.set(nums[i], i);
    }

    return answer;
};

// 2
const twoSum = function (nums, target) {
    let answer = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let key = target - nums[i];
            if (nums[j] === key) {
                answer = [i, j];
                return answer;
            }
        }
    }
    return answer;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([0, 4, 3, 0], 0));
