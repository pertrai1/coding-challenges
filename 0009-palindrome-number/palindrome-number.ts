function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let original = x;
    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    return reversed === original;
};