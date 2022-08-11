// 1023. Camelcase Matching
// https://leetcode.com/problems/camelcase-matching/

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  let res = [];
  for (const q of queries) {
    res.push(isMatch(q, pattern));
  }

  return res;
};

function isMatch(q, p) {
  let i = 0;
  for (let j = 0; j < q.length; j++) {
    if (i < p.length && q[j] === p[i]) {
      i++;
    } else if (q[j].toUpperCase() === q[j]) {
      return false;
    }
  }

  return i === p.length;
}

console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FB"
  )
);

console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FoBa"
  )
);

console.log(
  camelMatch(
    ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
    "FoBaT"
  )
);
