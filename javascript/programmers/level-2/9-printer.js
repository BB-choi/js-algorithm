// 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    var answer = 0;

    while (priorities.length) {
        // let max = Math.max(...priorities);
        let cur = priorities.shift();
        if (!priorities.filter((el) => cur < el).length) {
            answer++;
            if (0 === location) {
                return answer;
            }
        } else {
            priorities.push(cur);
        }
        // 프린트된 문서가 나 자신(0===location)이 아닐때에도 location--처리해 주어야 한다.
        location--;
        if (location < 0) {
            location = priorities.length - 1;
        }
    }

    return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
