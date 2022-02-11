// 문자열을 정수로 바꾸기
// https://programmers.co.kr/learn/courses/30/lessons/12925

function solution(s) {
    // return Number(s);

    let sign = 1;
    let idx = 0;
    let result = 0;
    if (s[idx] === "-") {
        sign *= -1;
        idx++;
    }
    if (s[idx] === "+") {
        idx++;
    }

    // "0".charCodeAt() : 48
    while (idx < s.length) {
        result = result * 10 + (s[idx].charCodeAt(0) - 48);
        idx++;
    }

    return sign * result;
}

console.log(solution("1234"));
console.log(solution("-1234"));
