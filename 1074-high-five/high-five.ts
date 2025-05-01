function highFive(items: number[][]): number[][] {
    const studentMap = new Map();
    for (const item of items) {
        if (!studentMap.has(item[0])) {
            studentMap.set(item[0], []);
        }
        const items = studentMap.get(item[0]);
        items.push(item[1]);
    }
    const result = [];
    for (const [key, value] of studentMap) {
        const topScore = Math.floor(value.sort((a, b) => b - a).slice(0, 5).reduce((acc, curr) => acc + curr, 0) / 5);
        result.push([key, topScore])
    }
    return result.sort((a, b) => a[0] - b[0]);
};