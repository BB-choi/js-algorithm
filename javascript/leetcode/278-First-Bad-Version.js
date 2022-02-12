// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function (n) {
        let first = 1;
        let last = n;
        let mid = 0;
        while (first <= last) {
            mid = Math.floor(first + (last - first) / 2);
            // (last - first) / 2

            if (isBadVersion(mid)) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }
        return first;
    };
};

function isBadVersion(n) {
    if (n >= 662351799) return true;
    return false;
}

// 1182691386
// 662351799

function test(n) {
    let first = 1;
    let last = n;
    let mid = 0;
    while (first <= last) {
        mid = Math.floor(first + (last - first) / 2);

        if (isBadVersion(mid)) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return first;
}

console.log(test(1182691386));
