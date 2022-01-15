/* function solution(n, arr) {
    let answer;
    let sumNums = [];

    arr.sort((a, b) => b - a);
    for (let i = 0; i < n; i++) {
        let temp = arr[i];
        let sum = 0;
        while (temp) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        sumNums.push(sum);
    }
    answer = arr[sumNums.indexOf(Math.max(...sumNums))];

    return answer;
} */

/* function solution(n, arr) {
    let answer = 0,
        max = Number.MIN_SAFE_INTEGER;

    for (let x of arr) {
        let sum = 0,
            tmp = x;

        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum >= max && x > answer) {
            max = sum;
            answer = x;
        }
    }
    return answer;
} */

function solution(n, arr) {
    let answer = 0,
        max = Number.MIN_SAFE_INTEGER;

    for (let x of arr) {
        let sum = x
            .toString()
            .split("")
            .reduce((a, b) => Number(a) + Number(b));

        if (sum >= max && x > answer) {
            max = sum;
            answer = x;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
