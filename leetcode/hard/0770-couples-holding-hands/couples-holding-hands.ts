function minSwapsCouples(row: number[]): number {
    const n = row.length;
    let swaps = 0;
    for (let i = 0; i < n - 1; i += 2) {
        if (row[i + 1] !== (row[i] ^ 1)) {
            for (let j = i + 1; j < n; j++) {
                if (row[j] === (row[i] ^ 1)) {
                    [row[i + 1], row[j]] = [row[j], row[i + 1]];
                    swaps++;
                    break;
                }
            }
        }
    }
    return swaps;
}