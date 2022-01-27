// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    var answer = [];
    let numLen = numbers.length;
    let sums = new Set();

    for (let i = 0; i < numLen; i++) {
        for (let j = i + 1; j < numLen; j++) {
            sums.add(numbers[i] + numbers[j]);
        }
    }
    answer = [...sums].sort((a, b) => a - b);

    return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
