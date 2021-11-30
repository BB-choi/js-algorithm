let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// input 입력 예시
// let input = "5\n1\n2\n10\n70\n10000".toString().trim().split("\n");
// let input = "5\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n1000000"
//     .toString()
//     .trim()
//     .split("\n");
input = input.map(Number);
input.shift();
// 약수의 합 구하기 1 f(n)
/*function f(n) {
    let sum = 0;
    // let i = 0;
    for (let i = 1; i * i <= n; i++) {
        if (i * i === n) {
            sum += i;
        } else if (n % i === 0) {
            sum += i + n / i;
        }
    }
    return sum;
} */
// 약수의 합 구하기 2 f(n)
/* function f(n) {
    let i = 0;
    let sum = 0;
    
    for (i = 1; i * i < n; i++) {
        if (n % i === 0) {
            sum += i + n / i;
        }
    }
    if (i * i === n) {
        sum += i;
    }
    return sum;
} */

// f(x)에 쓸 배열 모든 경우에 1이 약수로들어가므로 1로 채워놓고 for문에서 i를 2부터 시작한다.
let arr = new Array(1000001).fill(1);
// g(x)에 쓸 배열,
// gArr[i] += gArr[i - 1] + arr[i]; 처럼 + gArr[i - 1] 을 사용해야하므로 0으로 채워놓음 gArr[0]이 숫자가 아니거나(결과 : NaN), gArr[0]이 1이 되면 결과가 달라진다.
let gArr = new Array(1000001).fill(0);

// f(x)역할하는 배열 만들기
//  i * j 가 1000000 일때까지만 반복문을 돈다.
// 나의 배수에게 나를 더해준다.
for (let i = 2; i < 1000001; i++) {
    for (let j = 1; i * j < 1000001; j++) {
        arr[i * j] += i;
    }
}

// g(n) 역할하는 배열 만들기
// gArr[i] 에 gArr[i - 1](i -1 까지의 약수의 합)을 더하고 arr[i](i에 대한 약수)를 더해줘서 gArr[i]를 완성한다.
// i는 100만까지해서 100만까지 입력이 들어와도 처리할 수 있도록 한다.
for (let i = 1; i < 1000001; i++) {
    gArr[i] += gArr[i - 1] + arr[i];
}

let answer = "";
// for문을 돌면서 input의 길이를 다시 잴 필요 없이 len에 저장해둔다.
let len = input.length;
for (let idx = 0; idx < len; idx++) {
    let x = input[idx];
    let sum = 0;
    sum = gArr[x];
    answer += sum + "\n";
}
console.log(answer);
