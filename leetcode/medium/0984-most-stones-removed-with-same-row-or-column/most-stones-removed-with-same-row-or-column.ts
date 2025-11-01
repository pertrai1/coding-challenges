function removeStones(stones: number[][]): number {
    if (stones.length < 2) {
        return 0;
    }

    const OFFSET = 10001;
    const parent = new Array(20002).fill(null).map((_, i) => i);

    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    function union(x: number, y: number): void {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }

    for (const [row, col] of stones) {
        union(row, col + OFFSET);
    }

    const componentSet = new Set<number>();
    for (const [row, col] of stones) {
        componentSet.add(find(row));
    }

    return stones.length - componentSet.size;
}
