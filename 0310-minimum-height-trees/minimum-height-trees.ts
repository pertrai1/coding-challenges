function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const graph: number[][] = Array.from({ length: n }, () => []);
    const degree: number[] = Array(n).fill(0);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    let leaves: number[] = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            leaves.push(i);
        }
    }

    let remainingNodes = n;
    while (remainingNodes > 2) {
        const leavesCount = leaves.length;
        remainingNodes -= leavesCount;

        const nextLeaves = [];

        for (const leaf of leaves) {
            for (const neighbor of graph[leaf]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    nextLeaves.push(neighbor);
                }
            }
        }

        leaves = nextLeaves;
    }
    return leaves;
};