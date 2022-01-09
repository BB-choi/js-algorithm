// 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051

/* function solution(numbers) {
    // var answer = 0;
    let checkNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        if (numbers.indexOf(checkNums[i]) === -1) {
            sum += checkNums[i];
        } else {
            continue;
        }
    }
    // answer = sum;
    return sum;
} */

function solution(numbers) {
    let sumNumbers = numbers.reduce((acc, cur) => acc + cur);

    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i;
    }

    return sum - sumNumbers;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
