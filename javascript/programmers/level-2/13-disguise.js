// 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  var answer = 1;
  const map = new Map();

  for (const c of clothes) {
    const [v, k] = c;
    if (map.has(k)) {
      map.set(k, map.get(k) + 1);
    } else {
      map.set(k, 1);
    }
  }
  //   console.log(map.values());
  for (let x of map.values()) {
    answer = answer * (x + 1);
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);

// reference
// https://im-developer.tistory.com/128
