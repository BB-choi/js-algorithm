// 메뉴 리뉴얼
// https://programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
    var answer = [];
    const list = {};

    for (let i = 0; i < orders.length; i++) {
        let str = [...orders[i]];
        str.sort();
    }

    const comb = (arr, n) => {
        const result = [];
        if (n === 1) return;
    };

    return answer;
}

console.log(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
    solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
