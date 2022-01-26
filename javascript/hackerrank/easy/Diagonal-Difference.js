// Diagonal Difference
// https://www.hackerrank.com/challenges/diagonal-difference/problem

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let i = 0;
    let A = 0;
    let B = 0;
    let n = arr.length;
    while (i < n) {
        A += arr[i][i];
        B += arr[i][n - i - 1];
        i++;
    }
    return Math.abs(A - B);
}

const n = 3;
const input = "11 2 4\n4 5 6\n10 8 -12".split("\n");
let arr = Array(n);
for (let i = 0; i < n; i++) {
    arr[i] = input[i].split(" ").map((arrTemp) => parseInt(arrTemp, 10));
}

console.log(diagonalDifference(arr));
