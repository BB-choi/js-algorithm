// 10093 - 숫자

let nums = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
// let nums = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split(" ")
//     .map(Number);

// 오름차순으로 바꾸기 nums[0] !== nums[1] 인 경우
// nums[0]이 nums[1]보다 작은 수가 되도록
nums.sort((a, b) => a - b);

let printNum = "";
if (nums[0] < nums[1]) {
    console.log(nums[1] - nums[0] - 1);
} else if (nums[0] === nums[1]) {
    // 두 수가 같은 경우
    console.log(0);
}
nums[0]++;
while (nums[0] < nums[1]) {
    printNum += nums[0] + " ";
    nums[0]++;
}
console.log(printNum);
