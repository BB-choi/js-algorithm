// 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943

function even(num) {
    return Math.floor(num / 2);
}

function odd(num) {
    return num * 3 + 1;
}

function solution(num) {
    var answer = 0;
    let cnt = 0;

    while (num !== 1 && cnt < 500) {
        cnt++;
        if (num % 2) num = odd(num);
        else num = even(num);
    }

    if (num === 1) answer = cnt;
    else answer = -1;
    return answer;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
