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

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(10001));
console.log(isPalindrome(1001));
