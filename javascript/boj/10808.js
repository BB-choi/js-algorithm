// 10808 - 알파벳 개수

let str = require("fs").readFileSync("/dev/stdin").toString().trim();

// let str = "baekjoon".toString().trim();
let abc = [];
let cnt = new Array(26).fill(0);

let a = 97;
for (let i = 0; i < 26; i++) {
    abc[i] = String.fromCharCode(a);
    a++;
}

let strArr = str.split("");
strArr.forEach((el) => {
    // console.log(el);
    // console.log(abc.indexOf(el));
    cnt[abc.indexOf(el)]++;
});

console.log(cnt.join(" "));
