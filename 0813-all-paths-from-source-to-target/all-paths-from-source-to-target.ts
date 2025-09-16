function allPathsSourceTarget(graph: number[][]): number[][] {
    const result: number[][] = [];
    const target = graph.length - 1;

    function dfs(currentNode: number, currentPath: number[]) {
        // base case: reached target node
        if (currentNode === target) {
            // make sure to copy otherwise all results will reference same array
            result.push([...currentPath]);
            return;
        }

        // explore all neighbors
        for (const neighbor of graph[currentNode]) {
            // template for backtracking
            currentPath.push(neighbor); // 1. Choose
            dfs(neighbor, currentPath); // 2. Explore
            currentPath.pop(); // 3. Unchoose (backtrack)
        }
    }

    // start with initial node - [0]
    dfs(0, [0]);
    return result;
};
