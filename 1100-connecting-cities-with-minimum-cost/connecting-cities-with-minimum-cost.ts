// Sort by cost ascending
function sortElements(a: number[], b: number[]): number {
    return a[2] - b[2];
}
// Find with path compression
function find(parent: number[], x: number): number {
    if (parent[x] !== x) {
        parent[x] = find(parent, parent[x]); // path compression
    }
    return parent[x];
}
// Union by rank
function union(parent: number[], rank: number[], x: number, y: number): boolean {
    const rootX = find(parent, x);
    const rootY = find(parent, y);

    if (rootX === rootY) return false;

    if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
    } else {
        parent[rootY] = rootX;
        rank[rootX]++;
    }
    return true;
}
function minimumCost(n: number, connections: number[][]): number {
    connections.sort(sortElements);

    // Disjoint Set Union setup
    const parent: number[] = Array(n + 1).fill(0).map((_, i) => i);
    const rank: number[] = Array(n + 1).fill(0);

    // Kruskal's algorithm
    let totalCost = 0;
    let edgesUsed = 0;

    for (const [u, v, cost] of connections) {
        if (union(parent, rank, u, v)) {
            totalCost += cost;
            edgesUsed++;
            if (edgesUsed === n - 1) break;
        }
    }
    return edgesUsed === n - 1 ? totalCost : -1;
}