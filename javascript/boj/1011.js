let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

/* 규칙 : 
이동거리  이동횟수  / 같은 숫자 나오는 횟수
1 1 / 1 1의 제곱
2 2 / 1
--------
3 3 / 2
4 3 / 2 2의 제곱
5 4 / 2
6 4 / 2
--------
7 5 / 3
8 5 / 3
9 5 / 3 3의 제곱
10 6 / 3
11 6 / 3
12 6 / 3
--------
13 7 / 4
14 7 / 4
15 7 / 4
16 7 / 4 4의 제곱
17 8 / 4
....
--------
21 9 / 5
....

제곱근을 구해서, n의 제곱보다 작거나 같으면 (n * 2) - 1
n의 제곱보다 크면 n * 2
 */

// let input = "3\n0 15\n1 17\n1 18".toString().trim().split("\n");
let rep = Number(input[0]);
let arr = [];
input.shift();

for (let i = 0; i < rep; i++) {
    arr = input[i].toString().trim().split(" ");
    arr = arr.map(Number);

    let distance = arr[1] - arr[0];
    let n = Math.round(Math.sqrt(distance));

    if (distance <= Math.pow(n, 2)) {
        console.log(n * 2 - 1);
    } else {
        console.log(n * 2);
    }
}
