// 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    var answer = "";

    let i = s.length / 2;
    if (s.length % 2) answer = s[Math.floor(i)];
    else answer = s[i - 1] + s[i];

    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));
