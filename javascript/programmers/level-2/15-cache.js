// 캐시
// https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  let cache = [];
  let runtime = 0;

  function moveToLastIdx(cur, c) {
    while (cur !== cache.length - 1) {
      cache[cur] = cache[cur + 1];
      cur = cur + 1;
    }
    cache[cur] = c;
  }

  for (const city of cities) {
    const c = city.toLowerCase();
    if (cache.length <= cacheSize && cache.indexOf(c) > -1) {
      // 있을때
      let cur = cache.indexOf(c);
      moveToLastIdx(cur, c);
      runtime = runtime + 1;
    } else {
      // 없을때
      if (cache.length >= cacheSize) {
        cache = cache.slice(1);
      }
      if (cacheSize > 0) {
        cache.push(c);
      }
      runtime = runtime + 5;
    }
  }

  return runtime;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
);
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution(0, ["LA", "LA", "LA", "LA"]));
