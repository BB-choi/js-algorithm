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

function another(n) {
    str = "";
    function DFS(L) {
        if (L === 0) return;
        DFS(L - 1);
        // console.log(L);
        str += L + " ";
    }
    DFS(3);
    console.log(str);
}

another(3);
