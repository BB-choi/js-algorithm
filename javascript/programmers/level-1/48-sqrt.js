// 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    var answer = -1;

    let temp = 1;
    let flag = 0;
    let add = 3;
    while (temp <= n) {
        if (temp === n) {
            flag = 1;
            break;
        }
        temp += add;
        add += 2;
    }

    let num = Math.sqrt(n);
    if (flag) answer = BigInt(num + 1) * BigInt(num + 1);

    return Number(answer);
}

console.log(solution(121));
console.log(solution(3));
