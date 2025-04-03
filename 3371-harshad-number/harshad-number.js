/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let temp = x;
    let total = 0;
    while (temp > 0) {
        total += temp % 10;
        temp = Math.floor(temp / 10);
    }
    return x % total === 0 ? total : -1;
};