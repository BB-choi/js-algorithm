// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    var answer = "";
    answer = s.split("").sort().reverse().join("");
    return answer;
}

console.log(solution("Zbcdefg"));
