function solution(files) {
  const arr = files.map((el) => {
    const h = el.split(/\d/).filter((el) => el)[0];
    const n = parseInt(el.split(h).filter((el) => el)[0], 10);

    return { h, n, origin: el };
  });

  arr.sort((a, b) => {
    return a.h.toLowerCase().localeCompare(b.h.toLowerCase()) || a.n - b.n;
  });

  answer = arr.map((el) => el.origin);

  return answer;
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
