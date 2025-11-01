function transpose(matrix: number[][]): number[][] {
    const result = Array.from({ length: matrix[0].length }, () => new Array(matrix.length).fill(0));
    for (let rows = 0; rows < matrix.length; rows++) {
        for (let cols = 0; cols < matrix[0].length; cols++) {
        result[cols][rows] = matrix[rows][cols]
        }
    }
    return result;
};