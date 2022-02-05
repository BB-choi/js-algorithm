// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    let temp = s.replace(/[^0-9]/g, "");
    if (s.length === temp.length && (s.length === 4 || s.length === 6))
        return true;
    return false;
}

console.log(solution("a1234"));
console.log(solution("1234"));
console.log(solution("1234567"));
console.log(solution("12345asd7"));
