function solution(arr1, arr2) {
    let answer = [];

    // answer = arr1.concat(arr2).sort((a, b) => a - b);

    // answer = [...arr1, ...arr2].sort((a, b) => a - b);

    let cpArr1 = [...arr1];
    cpArr1.push(...arr2);
    cpArr1.sort((a, b) => a - b);
    answer = cpArr1;
    return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
