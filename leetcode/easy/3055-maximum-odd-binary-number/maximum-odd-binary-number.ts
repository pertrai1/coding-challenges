function maximumOddBinaryNumber(s: string): string {
    const totalOnes = [...s].filter(char => char === "1").length - 1;
    const totalZeros = [...s].filter(char => char === "0").length;
    return `${"1".repeat(totalOnes)}${"0".repeat(totalZeros)}1`;
};