let graph = Array.from(Array(5 + 1), (el) => Array(5 + 1).fill(0));
console.log(graph);

console.log(
    Array.from({ length: 5 }, (el) => Array.from({ length: 5 }, () => 0))
);

// reference
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// https://velog.io/@rhkrgudwh/Javascript-2%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0-feat.-Array.from
