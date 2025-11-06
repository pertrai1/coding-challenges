function leadsToDestination(n: number, edges: number[][], source: number, destination: number): boolean {
    const adjacencyList = new Map<number, number[]>();
    for (const edge of edges) {
        if (!adjacencyList.has(edge[0])) {
            adjacencyList.set(edge[0], []);
        }
        adjacencyList.get(edge[0])!.push(edge[1]);
    }
    const visiting = new Set<number>();
    const memo = new Map<number, boolean>();

    function dfs(node: number): boolean {
        if (visiting.has(node)) return false;
        if (memo.has(node)) return memo.get(node)!;

        const neighbors = adjacencyList.get(node) || [];
        if (node === destination) {
            const result = neighbors.length === 0;
            memo.set(node, result);
            return result;
        }
        if (neighbors.length === 0) {
            memo.set(node, false);
            return false;
        }
        visiting.add(node);
        for (const neighbor of neighbors) {
            if (!dfs(neighbor)) {
                memo.set(node, false);
                visiting.delete(node);
                return false;
            }
        }
        visiting.delete(node);
        memo.set(node, true);
        return true;
    }
    return dfs(source);
}

