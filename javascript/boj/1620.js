// 1620 - 나는야 포켓몬 마스터 이다솜

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);
let pokemons = [];
pokemons[0] = "none";
let pokemonsMap = new Map();

for (let i = 1; i <= N; i++) {
    // pokemonsMap 형식 : "Pikachu => 1"
    pokemonsMap.set(input[i].trim(), i);
    pokemons[i] = input[i].trim();
}
// 맵 확인
// console.log(pokemonsMap);
let answer = "";
for (let i = N + 1; i <= N + M; i++) {
    if (Number(input[i]) > 0) {
        answer += pokemons[Number(input[i])] + "\n";
    } else {
        // console.log(input[i]);
        answer += pokemonsMap.get(input[i].trim()) + "\n";
    }
}

// 시간초과
// object로 하든, Array로 하든(indexOf) 모두 시간초과되므로 map 이용

// function getKeyByValue(obj, val) {
//     return Object.keys(obj).find((key) => obj[key] === val);
// }
// for (let i = N + 1; i <= N + M; i++) {
//     if (Number(input[i]) > 0) {
//         answer += pokemons[Number(input[i])] + "\n";
//     } else {
//         // answer += pokemons.indexOf(input[i].trim()) + "\n";
//         answer += getKeyByValue(pokemons, input[i].trim()) + "\n";
//     }
// }
console.log(answer);
