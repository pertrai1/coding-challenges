/*
Complexity:
@time: O(1) because there is a fixed number of iterations - 13 - through symbols.
@space: O(k) where k is length of the output string.
*/
function intToRoman(num: number): string {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let result = '';

    for (let i = 0; i < values.length; i++) {
        // calculate how many times the current value fits into num
        const count = Math.floor(num / values[i]);
        if (count > 0) {
            // bulk string addition
            result += symbols[i].repeat(count);
            num -= values[i] * count;
        }
    }

    return result;
};