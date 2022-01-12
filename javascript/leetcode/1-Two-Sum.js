// 1. Two Sum
// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// No
//  const dSearch = function (key, arr, start, end) {
//     let mid = Math.floor((start + end) / 2);
//     if (start > end) {
//         return -1;
//     }
//     if (key === arr[mid]) {
//         return mid;
//     }
//     if (arr[mid] > key) {
//         return dSearch(key, arr, start, mid - 1);
//     }
//     if (arr[mid] < key) {
//         return dSearch(key, arr, mid + 1, end);
//     }
// };
// const twoSum = function (nums, target) {
//     let answer = [];
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         let key = target - nums[i];
//         let result = dSearch(key, nums, i + 1, len - 1);
//         if (result > -1) {
//             answer[0] = i;
//             answer[1] = result;
//             break;
//         }
//     }
//     return answer;
// };

// 119ms
const twoSum = function (nums, target) {
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

// 100ms
// const twoSum = function (nums, target) {
//     let answer = [];
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             let key = target - nums[i];
//             if (nums[j] === key) {
//                 answer = [i, j];
//                 return answer;
//             }
//         }
//     }
//     return answer;
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([0, 4, 3, 0], 0));
