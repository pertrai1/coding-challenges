function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const totalAlice = aliceSizes.reduce((acc, curr) => acc + curr, 0);
    const totalBob = bobSizes.reduce((acc, curr) => acc + curr, 0);
    const bobSet = new Set<number>(bobSizes);
    
    let diff = (totalAlice - totalBob) / 2;
    let result: number[] | null = null;
    
    for (const num of aliceSizes) {
        const candidate = num - diff;
        if (bobSet.has(candidate)) {
        result = [num, candidate];
        break;
        }
    }
    return result || [];
};