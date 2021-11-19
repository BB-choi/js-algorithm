let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let num = input; // 26
let numToStr;
let newNum = 100;
let count = 0;

while (input !== newNum) {
    count++;
    numToStr = num.toString().split("");
    if (num < 10) {
        numToStr.unshift("0");
    }
    let numSum = parseInt(numToStr[0]) + parseInt(numToStr[1]); // 8
    newNum = Number((num % 10).toString() + (numSum % 10).toString()); //68
    num = newNum;
}
console.log(count);
