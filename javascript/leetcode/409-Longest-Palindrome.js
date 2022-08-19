//409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const cnt = new Map();

  for (const c of s) {
    if (cnt.has(c)) {
      cnt.set(c, cnt.get(c) + 1);
    } else {
      cnt.set(c, 1);
    }
  }

  const arr = [...cnt];
  const filterArr = arr.filter((el) => el[1] >= 2);

  const filterCount = filterArr.reduce((prev, cur) => {
    if (cur[1] % 2 === 0) {
      return prev + cur[1];
    } else {
      return prev + cur[1] - 1;
    }
  }, 0);

  if (
    arr.length > filterArr.length ||
    filterArr.filter((el) => el[1] > 2 && el[1] % 2).length
  ) {
    return filterCount + 1;
  } else {
    return filterCount;
  }
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aaaa"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("bananas"));
console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
