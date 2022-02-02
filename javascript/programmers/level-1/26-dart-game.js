// 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    var answer = 0;
    let arrRes = dartResult.split("");
    let idx = 0;
    let sum = [];
    let sumidx = 0;
    const operator = {
        S: 1,
        D: 2,
        T: 3,
    };

    while (idx < dartResult.length) {
        let temp = 0;
        while (Number(arrRes[idx]) >= 0) {
            temp += arrRes[idx];
            idx++;
        }
        let tempNum = Number(temp);

        tempNum = tempNum ** operator[arrRes[idx]];
        idx++;

        if (arrRes[idx] === "*") {
            if (!sumidx) tempNum *= 2;
            else {
                sum[sumidx - 1] *= 2;
                tempNum *= 2;
            }
            idx++;
        }

        if (arrRes[idx] === "#") {
            tempNum *= -1;
            idx++;
        }

        sum[sumidx++] = tempNum;
    }

    answer = sum.reduce((a, b) => a + b);
    return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
