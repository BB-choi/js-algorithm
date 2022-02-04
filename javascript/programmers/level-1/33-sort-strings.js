// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    return strings.sort(
        (a, b) => a.charCodeAt(n) - b.charCodeAt(n) || a.localeCompare(b)
    );
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
console.log(solution(["abc", "abd", "cdx"], 1));
