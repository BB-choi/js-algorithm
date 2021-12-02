// 10799 - 쇠막대기

let input = require("fs").readFileSync("/dev/stdin").toString().trim();

// let input = "()(((()())(())()))(())".toString().trim();
// let input = "(((()(()()))(())()))(()())".toString().trim();
let stack = [];
let length = input.length;

// 발견된 레이저 수
let laser = 0;
// 큰 막대기에 사용할 total 카운트
let total = 0;
// laser가 total에 추가된 횟수 (나무막대기 자른 횟수) 모든 횟수에 +1 해줘야함
let count = 0;

for (let i = 0; i < length; i++) {
    laser = 0;
    if (input[i] === "(") {
        if (i === length - 1 || input[i + 1] !== ")") {
            stack.push(input[i]);
        } else if (input[i + 1] === ")") {
            stack.push(1);
        }
        // console.log(i, stack);
    } else if (input[i] !== "(" && input[i + 1] === ")") {
        // 레이저 수 입력한 것을 꺼냄
        // console.log(i, stack);
        while (stack[stack.length - 1] !== "(") {
            laser += stack.pop();
        }
        total += laser;
        count++;
        // "("를 꺼냄
        stack.pop();
        if (stack.length) {
            stack.push(laser);
        }
    }
}

console.log(total + count);

// 시간초과
/* let laser = 0;
let cutted = 0;
let from = 0;
let to = 0;
let idxStack = [];

// let length = input.length;

function getlaserCnt(from, to) {
    let laserCnt = 0;
    for (i = from; i <= to; i++) {
        if (input[i] === "(" && input[i + 1] === ")") {
            laserCnt++;
        }
    }
    return laserCnt;
}

for (let i = 0; i < length; i++) {
    from = 0;
    to = 0;
    if (input[i] === "(") {
        if (i === length - 1 || input[i + 1] !== ")") {
            // stack.push(input[i]);
            idxStack.push(i);
            // console.log(idxStack);
        }
    } else if (input[i] !== "(" && input[i + 1] === ")") {
        // stack.pop()
        from = idxStack.pop();
        to = i + 1;
        laser = getlaserCnt(from, to);
        // if (from && to) {
        cutted += laser + 1;
        // }
        // console.log(i, from, to, laser, cutted);
    }
}
console.log(cutted); */
