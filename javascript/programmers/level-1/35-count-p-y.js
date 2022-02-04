// 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
    var answer = true;

    s = s.toLowerCase();
    let cntP = 0;
    let cntY = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p") cntP++;
        if (s[i] === "y") cntY++;
    }

    answer = cntP === cntY ? true : false;

    return answer;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
