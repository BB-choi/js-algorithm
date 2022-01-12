// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let strX = String(x);
    let len = strX.length;
    if (x < 0) {
        return false;
    }
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (strX[i] !== strX[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let strX = String(x);
    let reversedStrX = strX.split("").reverse().join("");
    if (strX !== reversedStrX) return false;
    return true;
};

// reference : https://leetcode.com/problems/palindrome-number/solution/
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reversedX = 0;
    while (x > reversedX) {
        reversedX = reversedX * 10 + (x % 10);
        x = parseInt(x / 10);
    }
    // x의 길이가 홀수인 경우 남는 자리수가 있을 수 있다.
    if (x === reversedX || x === parseInt(reversedX / 10)) {
        return true;
    }
    return false;
};

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    let num = x;
    let reversedX = 0;
    while (num) {
        reversedX = reversedX * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    if (reversedX === x) {
        return true;
    }
    return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(10001));
console.log(isPalindrome(1001));
