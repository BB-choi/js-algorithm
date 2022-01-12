// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/

const reverse = function (x) {
    let result = 0;
    let reversedX = String(x).split("").reverse();
    let sign = 1;

    if (reversedX[reversedX.length - 1] === "-") {
        reversedX.pop();
        sign = -1;
    }
    result = Number(reversedX.join("")) * sign;

    if (result > 2147483647 || result <= -2147483648) {
        return 0;
    }
    return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(900000));
console.log(reverse(1534236469));
