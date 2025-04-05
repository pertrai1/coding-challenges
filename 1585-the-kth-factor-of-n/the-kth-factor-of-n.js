/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const result = [];
    let count = 1;
    while (count <= n) {
        if (n % count === 0) {
            result.push(count);
        }
        count++;
    }
    return result.length >= k ? result[k - 1] : -1;
};