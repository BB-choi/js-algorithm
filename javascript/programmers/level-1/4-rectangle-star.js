// 직사각형 별찍기
// https://programmers.co.kr/learn/courses/30/lessons/12969

function solution(str) {
    const n = str.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);

    let star = "";
    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            star += "*";
        }
        star += "\n";
    }
    console.log(star);
}

solution("5 3");
