// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
};

var longestCommonPrefix = function (strs) {
    let result = "";
    let len = strs.length;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
        if (strs[i].length < min) {
            min = strs[i].length;
        }
    }
    for (let i = 0; i < min; i++) {
        let char = strs[0][i];
        for (let j = 0; j < len; j++) {
            let str = strs[j];
            if (str[i] !== char) {
                return result;
            }
        }
        result += char;
    }
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
