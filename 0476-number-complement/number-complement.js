/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const numBinary = num.toString(2);
    let str = "";
    for (const num of numBinary) {
        if (num === "1") {
        str += "0";
        } else {
        str += "1";
        }
    }
    return parseInt(str, 2);
};