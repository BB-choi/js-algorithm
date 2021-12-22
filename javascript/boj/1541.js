// 1541 - 잃어버린 괄호

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
// let input = require("fs").readFileSync("input.txt").toString().trim();

// 숫자, 연산자 분리는 이렇게 Regex 정규표현식으로
// let nums = input.split(/[+/-]/).map(Number);
// let op = input.split("").filter((word) => word === "+" || word === "-");

// 최소값을 구하므로 - 로만 구분하면 된다.
let nums = input.split("-");
let numsLen = nums.length;

let ans = 0;
let sum = 0;

for (let i = 0; i < numsLen; i++) {
    sum = 0;
    nums[i] = nums[i].split("+");
    let numsILen = nums[i].length;
    for (let j = 0; j < nums[i].length; j++) {
        // nums[i][j] = Number(nums[i][j]);
        // sum += nums[i][j];
        sum += Number(nums[i][j]);
    }
    // nums배열의 모든 값이 + 연산을 끝낸 값으로 변경됨
    nums[i] = sum;
}

// 최소값이므로 첫번째-(나머지) 로 연산

ans = nums[0];
for (let i = 1; i < numsLen; i++) {
    ans -= nums[i];
}

console.log(ans);
