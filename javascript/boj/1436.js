let num = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// let num = 3;
const solution = (num) => {
    //ans : num이랑 같은 값을 가지는 숫자
    // let [ans, cnt] = [0, 0]; 665까지는 찾을 필요 없음
    // let [ans, cnt] = [0, 665];
    let [ans, cnt] = [1, 666];
    while (ans !== num) {
        cnt++;
        if (`${cnt}`.includes("666")) ans++;
        // console.log(ans, cnt, num);
    }
    return cnt;
};

let result = solution(num);
console.log(result);
