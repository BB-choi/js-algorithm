// 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919

function solution(seoul) {
    var answer = "";
    // let i = 0;
    // while (seoul[i] !== "Kim") {
    //     i++;
    // }
    let i = seoul.indexOf("Kim");
    answer = `김서방은 ${i}에 있다`;
    return answer;
}

console.log(solution(["Jane", "Kim"]));
