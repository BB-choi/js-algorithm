// Time Conversion
// https://www.hackerrank.com/challenges/time-conversion/problem

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let format = s.slice(-2);
    let arrTime = s
        .replace(/[^0-9:]/g, "")
        .split(":")
        .map(Number);

    if (format === "PM") {
        if (arrTime[0] !== 12) arrTime[0] += 12;
    }
    if (format === "AM") {
        if (arrTime[0] === 12) arrTime[0] -= 12;
    }
    arrTime = arrTime
        .map(String)
        .map((el) => (el.length === 2 ? el : "0" + el));
    return arrTime.join(":");
}

console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("07:05:45PM"));
