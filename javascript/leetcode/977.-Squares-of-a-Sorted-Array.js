// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let answer = Array.from(Array(nums.length));
    // pointer
    let left = 0;
    let right = nums.length - 1;

    let idx = answer.length - 1;
    while (idx > 0) {
        // while (nums[left] !== nums[right]) { // nums에 같은 숫자가 오는 경우 문제 있을 수 있음
        let leftNum = Math.abs(nums[left]);
        let rightNum = Math.abs(nums[right]);

        if (leftNum > rightNum) {
            answer[idx] = leftNum * leftNum;
            left++;
        } else {
            answer[idx] = rightNum * rightNum;
            right--;
        }
        idx--;
    }

    answer[idx] = nums[left] * nums[left];

    return answer;
};

var sortedSquaresNew = function (nums) {
    let answer = [];
    // pointer
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let leftNum = Math.abs(nums[left]);
        let rightNum = Math.abs(nums[right]);

        if (leftNum > rightNum) {
            answer.push(leftNum * leftNum);
            left++;
        } else {
            answer.push(rightNum * rightNum);
            right--;
        }
    }

    return answer.reverse();
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000]));

console.log(sortedSquaresNew([-7, -3, 2, 3, 11]));
console.log(sortedSquaresNew([-4, -1, 0, 3, 10]));
console.log(sortedSquaresNew([-10000, -9999, -7, -5, 0, 0, 10000]));

// reference
// https://www.youtube.com/watch?v=FPCZsG_AkUg
