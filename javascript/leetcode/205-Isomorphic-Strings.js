// 205. Isomorphic Strings
// https://leetcode.com/study-plan/leetcode-75/?progress=xhgn6yz1

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const objS = {};
  const objT = {};

  const len = s.length;
  for (let i = 0; i < len; i++) {
    objT[t[i]] = s[i];
    objS[s[i]] = t[i];
  }

  let s2 = "";
  let t2 = "";
  for (let i = 0; i < len; i++) {
    t2 += objS[s[i]];
    s2 += objT[t[i]];
  }

  // console.log(s2, t2);
  if (s2 !== s || t2 !== t) {
    return false;
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));
