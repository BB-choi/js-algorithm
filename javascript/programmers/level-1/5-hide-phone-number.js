// 핸드폰 번호 가리기
// https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    var answer = "";
    let starLen = phone_number.length - 4;

    let pNumber = phone_number.slice(-4);
    for (let i = 0; i < starLen; i++) {
        answer += "*";
    }

    answer += pNumber;

    // let str = [];
    // for (let i = 0; i < nLen; i++) {
    //     str.push(phone_number[i]);
    // }

    // for (let i = 0; i < nLen - 4; i++) {
    //     str[i] = "*";
    // }
    // answer = str.join("");

    return answer;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
