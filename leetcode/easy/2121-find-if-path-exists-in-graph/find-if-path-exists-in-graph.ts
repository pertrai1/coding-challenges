function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if (source === destination) return true;
    if (edges.length === 0) return false;

    const graph: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }

    for (const [u, v] of edges) {
        graph.get(u)?.push(v);
        graph.get(v)?.push(u);
    }

    let visited = new Set<number>();
    return dfs(graph, source, destination, visited);
};

function dfs(graph: Map<number, number[]>, current: number, target: number, visited: Set<number>) {
    if (current === target) return true;
    if (visited.has(current)) return false;
    visited.add(current);

    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
        if (dfs(graph, neighbor, target, visited)) {
            return true;
        }
    }

    return false;
}