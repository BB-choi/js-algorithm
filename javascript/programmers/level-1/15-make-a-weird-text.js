// 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    let string = s.split(" ");
    let result = "";
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string[i].length; j++) {
            let char = string[i][j];
            if (j % 2) result += char.toLowerCase();
            else result += char.toUpperCase();
        }
        if (i !== string.length - 1) {
            result += " ";
        }
    }
    return result;
}

console.log(solution("try hello world"));
