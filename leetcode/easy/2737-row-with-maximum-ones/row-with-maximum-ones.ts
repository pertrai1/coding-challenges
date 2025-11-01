function rowAndMaximumOnes(mat: number[][]): number[] {
    const n = mat.length;
    let maxRowCount = 0;
    let maxRowIndex = 0;
    for (let i = 0; i < n; i++) {
        let totalOnes = 0;
        for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] === 1) {
            totalOnes += 1;
        }
        if (totalOnes > maxRowCount) {
            maxRowIndex = i;
            maxRowCount = totalOnes;
        }
        }
    }
    return [maxRowIndex, maxRowCount];
};