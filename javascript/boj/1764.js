// 1764 - 듣보잡

let path = "/dev/stdin";
// let path = "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, M] = input[0].trim().split(" ").map(Number);

// object로 해서 들은적없는 이름들을 넣을 공간
let obj = {};
// 두 조건(듣도, 보도)에 모두 해당하는 이름들을 넣을 배열
let ans = [];

for (let i = 1; i <= N; i++) {
    let nameD = input[i].trim();
    obj[nameD] = 1;
}
// N다음줄부터이므로 N + 1
// 무조건 M으로 하면 N === M 인 경우 입력에서 오류가 난다.
for (let i = N + 1; i <= N + M; i++) {
    let nameB = input[i].trim();
    if (obj[nameB]) {
        ans.push(nameB);
    }
}

// sort()는 문자기준으로 정렬해준다.
ans.sort();

let str = "";
let length = ans.length;
str += length + "\n";
for (let i = 0; i < length; i++) {
    str += ans[i] + "\n";
}

console.log(str);
