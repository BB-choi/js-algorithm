// 기능개발
// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    var answer = [];
    let count = 0;

    while (progresses.length) {
        progresses = progresses.map((el, i) => el + speeds[i]);
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        if (count) answer.push(count);
        count = 0;
    }

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
