// K번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let testCnt = commands.length;
    var answer = [];

    for (let idx = 0; idx < testCnt; idx++) {
        let [i, j, k] = commands[idx];
        i--;
        j--;
        k--;

        let arr = array.slice(i, j + 1);

        arr.sort((a, b) => a - b);
        answer.push(arr[k]);
    }

    return answer;
}

function newSolution(array, commands) {
    let cmdLength = commands.length;
    let answer = [];

    for (let i = 0; i < cmdLength; i++) {
        let [from, to, k] = commands[i];
        from--;
        to--;
        k--;
        let newArr = array
            .filter((el, i) => i >= from && i <= to)
            .sort((a, b) => a - b);
        answer.push(newArr[k]);
    }

    return answer;
}

console.log(
    solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ]
    )
);

console.log(
    newSolution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ]
    )
);
