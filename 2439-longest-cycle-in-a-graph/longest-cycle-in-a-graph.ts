function longestCycle(edges: number[]): number {
    let n = edges.length;

    // store the length of the longest cycle in the graph
    let answer = -1;

    // array to keep track of nodes that have been visited
    const visit = new Array(n).fill(false);

    // iterate to keep of visited nodes
    for (let i = 0; i < n; i++) {
        // if not visited, recursively visit
        if (!visit[i]) {
            const dist: Map<number, number> = new Map();
            dist.set(i, 1);
            dfs(i, edges, dist, visit);
        }
    }

    return answer;

    function dfs(node: number, edges: number[], dist: Map<number, number>, visit: boolean[]) {
        visit[node] = true;
        const neighbor = edges[node];

        if (neighbor != -1 && !visit[neighbor]) {
            dist.set(neighbor, dist.get(node) + 1);
            dfs(neighbor, edges, dist, visit);
        } else if (neighbor != -1 && dist.has(neighbor)) {
            answer = Math.max(answer, dist.get(node) - dist.get(neighbor) + 1);
        }
    }
};