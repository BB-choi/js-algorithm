// 시저 암호
// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    var answer = "";
    const len = s.length;
    const asciiA = "A".charCodeAt(); // 65
    const asciiZ = "Z".charCodeAt(); // 90

    const asciia = "a".charCodeAt(); // 61
    const asciiz = "z".charCodeAt(); // 122

    for (let i = 0; i < len; i++) {
        const curAscii = s[i].charCodeAt();
        let result = curAscii + n;

        if (curAscii >= asciiA && curAscii <= asciiZ) {
            if (result > asciiZ) result -= 26;
            answer += String.fromCharCode(result);
            continue;
        }

        if (curAscii >= asciia && curAscii <= asciiz) {
            if (result > asciiz) result -= 26;
            answer += String.fromCharCode(result);
            continue;
        }

        answer += s[i];
    }

    return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
