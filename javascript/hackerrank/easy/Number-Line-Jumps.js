// Number Line Jumps
// https://www.hackerrank.com/challenges/kangaroo/problem

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

// 속도 = 이동거리 / 점프횟수(j)
// 이동거리 = 속도 * 점프횟수(j)
// x1의 총 이동거리 d1 = (v1 * j) + x1
// x2의 총 이동거리 d2 = (v2 * j) + x2
// x1 + (v1 * j) === x2 + (v2 * j)
// x1 - x2 = (v2 * j) - (v1 * j)
// x1 - x2 = j * (v2 - v1)
// j = (x1 -x2) / (v2 - v1), j가 int여야 한다((x1 -x2) % (v2 - v1) === 0)

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v2 > v1) return "NO";
    if ((x1 - x2) % (v2 - v1) === 0) return "YES";
    return "NO";
}

console.log(kangaroo(2, 1, 1, 2));
console.log(kangaroo(0, 3, 4, 2));
