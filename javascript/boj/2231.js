// 4673(셀프넘버) 문제와 유사
// 셀프넘버가 아닌, "생성자"를 찾는다
let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function d(n) {
    let i = 1;
    let num = i;
    let temp = 0;
    let res = 0;
    while (1) {
        num = i;
        temp = 0;
        for (let j = 0; j < i.toString().length; j++) {
            temp += num % 10;
            num = Math.floor(num / 10);
        }
        res = i + temp;

        if (n == res) break;
        else if (i > n) {
            i = 0;
            return i;
        }
        i++;
    }
    return i;
}

let answer = 0;
answer = d(N);

console.log(answer);
