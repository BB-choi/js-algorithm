// https://programmers.co.kr/learn/courses/30/lessons/77884

function getDivisor(num) {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) cnt++;
    }
    return cnt;
}

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        let cnt = getDivisor(i);
        if (cnt % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}
