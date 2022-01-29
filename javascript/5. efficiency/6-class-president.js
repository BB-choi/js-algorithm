function solution(str) {
    let answer;
    let N = str.length;
    let result = new Map();

    for (const c of str) {
        if (result.get(c) !== undefined) result.set(c, result.get(c) + 1);
        if (!result.get(c)) result.set(c, 0);
    }

    let max = [...result].reduce((prev, cur) =>
        prev[1] > cur[1] ? prev : cur
    );
    answer = max[0];
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
