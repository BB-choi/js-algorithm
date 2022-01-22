function solution(arr1, arr2) {
    let answer = [];

    for (const el of arr1) {
        if (arr2.indexOf(el) > -1) {
            answer.push(el);
        }
    }
    answer.sort((a, b) => a - b);

    return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
