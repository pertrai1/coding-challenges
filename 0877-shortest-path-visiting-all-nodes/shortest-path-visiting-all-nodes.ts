function shortestPathLength(graph: number[][]): number {
    if (graph.length === 0) {
        return 0;
    }

    const n = graph.length;

    const visited = new Set<string>();

    const queue: [number, number, number][] = [];

    for (let i = 0; i < n; i++) {
        const mask = 1 << i;
        queue.push([i, mask, 0]);
        visited.add(`${i}, ${mask}`); // mark initial states as visited
    }

    while (queue.length > 0) {
        const [node, mask, distance] = queue.shift()!;

        if (mask === (1 << n) - 1) {
            return distance;
        }

        for (const neighbor of graph[node]) {
            const newMask = mask | (1 << neighbor);
            const stateKey = `${neighbor},${newMask}`;

            if (!visited.has(stateKey)) {
                visited.add(stateKey);
                queue.push([neighbor, newMask, distance + 1]);
            }
        }
    }

    return -1;
}