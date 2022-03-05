// 괄호 변환
// https://programmers.co.kr/learn/courses/30/lessons/60058

function getUandV(str) {
    let arr = [[], []];
    let [u, v] = arr;

    let i = 0;
    let first = str[i++];
    u.push(first);

    let second = first === "(" ? ")" : "(";
    let firstCnt = 1;
    let secondCnt = 0;
    while (firstCnt !== secondCnt) {
        if (str[i] === first) {
            firstCnt++;
        } else if (str[i] === second) {
            secondCnt++;
        }
        u.push(str[i]);
        i++;
    }
    while (i < str.length) {
        v.push(str[i]);
        i++;
    }

    return arr;
}

function isBalanced(arr) {
    let stack = [];

    let i = 0;
    if (arr[i] !== "(") return false;
    stack.push(arr[i++]);

    while (i < arr.length) {
        if (arr[i] === "(") {
            stack.push("(");
        } else if (arr[i] === ")") {
            if (!stack.length) return false;
            stack[stack.length - 1] === "(";
            stack.pop();
        }
        i++;
    }

    if (!stack.length) return true;
    return false;
}

function getBalanced(p) {
    let answer = "";

    if (p.length === 0) return p;

    let [u, v] = getUandV(p);
    if (isBalanced(u)) {
        answer += u.join("") + getBalanced(v.join(""));
    } else {
        let temp = "(";
        temp += getBalanced(v.join(""));
        temp += ")";
        let uStr = u.slice(1, -1);
        let i = 0;
        while (i < uStr.length) {
            if (uStr[i] === "(") temp += ")";
            else if (uStr[i] === ")") temp += "(";
            i++;
        }
        answer += temp;
    }

    return answer;
}

function solution(p) {
    var answer = "";

    if (isBalanced(p)) return p;

    answer = getBalanced(p);

    return answer;
}
console.log(solution("()))((()"));
