function squareIsWhite(coordinates: string): boolean {
    const [column, row] = coordinates.split('');
    const total = column.charCodeAt(0) - 96 + +row;
    return total % 2 !== 0;
};