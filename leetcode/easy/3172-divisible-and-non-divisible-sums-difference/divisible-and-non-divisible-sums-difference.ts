function differenceOfSums(n: number, m: number): number {
    let num1 = 0;
    let num2 = 0;

    let range = n;

    while (range >= 1) {
        if (range % m === 0) {
            num2 += range;
        } else {
            num1 += range;
        }
        range--;
    }
    return num1 - num2;
};