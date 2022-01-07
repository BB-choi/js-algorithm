// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    var answer = "";

    new_id = new_id.toLowerCase(); // 1
    new_id = new_id.replace(/[^0-9a-z\.\-\_]/g, ""); // 2
    new_id = new_id.replace(/[..]+/g, "."); // 3
    new_id = new_id.replace(/^\.|\.$/g, ""); //4
    if (!new_id.length) {
        // 5
        new_id = "a";
    }
    if (new_id.length > 15) {
        // 6
        new_id = new_id.slice(0, 15);
        new_id = new_id.replace(/\.$/g, "");
    }
    if (new_id.length < 3) {
        // 7
        let char = new_id[new_id.length - 1];
        while (new_id.length < 3) {
            new_id += char;
        }
    }

    answer = new_id;
    return answer;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
