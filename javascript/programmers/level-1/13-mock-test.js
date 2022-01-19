// 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    var answer = [];
    let qLen = answers.length;
    let [s1, s2, s3] = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let [s1Len, s2Len, s3Len] = [5, 8, 10];
    let [r1, r2, r3] = [0, 0, 0];

    // for (let i = 0; i < qLen; i++) {
    //     if (answers[i] === s1[i - Math.floor(i / s1Len) * s1Len]) {
    //         r1++;
    //     }
    //     if (answers[i] === s2[i - Math.floor(i / s2Len) * s2Len]) {
    //         r2++;
    //     }
    //     if (answers[i] === s3[i - Math.floor(i / s3Len) * s3Len]) {
    //         r3++;
    //     }
    // }

    for (let i = 0; i < qLen; i++) {
        if (answers[i] === s1[i % s1Len]) {
            r1++;
        }
        if (answers[i] === s2[i % s2Len]) {
            r2++;
        }
        if (answers[i] === s3[i % s3Len]) {
            r3++;
        }
    }

    let maxScore = Math.max(r1, r2, r3);
    if (maxScore === r1) {
        answer.push(1);
    }
    if (maxScore === r2) {
        answer.push(2);
    }
    if (maxScore === r3) {
        answer.push(3);
    }

    return answer;
}

function solutionWithFilter(answers) {
    let result = [];
    let [s1, s2, s3] = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let r1 = answers.filter((el, i) => el === s1[i % s1.length]).length;
    let r2 = answers.filter((el, i) => el === s2[i % s2.length]).length;
    let r3 = answers.filter((el, i) => el === s3[i % s3.length]).length;

    let maxScore = Math.max(r1, r2, r3);
    if (maxScore === r1) {
        result.push(1);
    }
    if (maxScore === r2) {
        result.push(2);
    }
    if (maxScore === r3) {
        result.push(3);
    }

    return result;
}

function newSolution(answers) {
    let result = [];
    let [s1, s2, s3] = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    let r1 = (r2 = r3 = 0);
    r1 = answers.filter((el, i) => el === s1[i % s1.length]).length;
    r2 = answers.filter((el, i) => el === s2[i % s2.length]).length;
    r3 = answers.filter((el, i) => el === s3[i % s3.length]).length;
    let maxScore = Math.max(r1, r2, r3);
    if (maxScore === r1) result.push(1);
    if (maxScore === r2) result.push(2);
    if (maxScore === r3) result.push(3);

    return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

console.log(solutionWithFilter([1, 2, 3, 4, 5]));
console.log(solutionWithFilter([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(solutionWithFilter([1, 3, 2, 4, 2]));

console.log(newSolution([1, 2, 3, 4, 5]));
console.log(newSolution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(newSolution([1, 3, 2, 4, 2]));
