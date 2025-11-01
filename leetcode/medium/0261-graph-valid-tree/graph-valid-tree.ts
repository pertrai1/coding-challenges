function createAdjacencyList(n: number, edges: number[][]): Map<number, number[]> {
    const adjacencyList: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, []);
    }
    for (const edge of edges) {
        adjacencyList.get(edge[0])!.push(edge[1]);
        adjacencyList.get(edge[1])!.push(edge[0]);
    }
    return adjacencyList;
}
function dfs(node: number, parent: number, adjacencyList: Map<number, number[]>, seen: Set<number>): boolean {
    if (seen.has(node)) {
        return false;
    }
    seen.add(node);
    for (const neighbor of adjacencyList.get(node)!) {
        if (parent !== neighbor) {
            const result = dfs(neighbor, node, adjacencyList, seen);
            if (!result) return false;
        }
    }
    return true;
}
function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) {
        return false;
    }
    const adjacencyList: Map<number, number[]> = createAdjacencyList(n, edges);
    const seen: Set<number> = new Set();

    return dfs(0, -1, adjacencyList, seen) && seen.size === n;
};

