// 재귀함수

function solution(n) {
    let str = "";
    let first = 1;

    function recursive(num) {
        if (num > n) return;
        str += num + " ";
        recursive(num + 1);
    }

    recursive(first);
    return str.trim();
}

console.log(solution(3));
