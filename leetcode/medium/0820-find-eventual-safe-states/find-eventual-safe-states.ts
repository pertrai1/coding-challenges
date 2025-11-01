function eventualSafeNodes(graph: number[][]): number[] {
    const n = graph.length;
    const reversedGraph = new Map<number, number[]>();

    for (let i = 0; i < n; i++) {
        reversedGraph.set(i, []);
    }

    for (let node = 0; node < n; node++) {
        for (const neighbor of graph[node]) {
            reversedGraph.get(neighbor)!.push(node);
        }
    }

    const indegree = new Map<number, number>();
    const queue: number[] = [];

    for (let i = 0; i < n; i++) {
        const incomingEdgeCount = graph[i].length;
        indegree.set(i, incomingEdgeCount);

        // if indegree is 0, add to queue because it is terminal node
        if (incomingEdgeCount === 0) {
            queue.push(i);
        }
    }
    const result: number[] = [];

    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        result.push(currentNode);

        for (const neighbor of reversedGraph.get(currentNode)!) {
            indegree.set(neighbor, indegree.get(neighbor)! - 1);

            // if neighbor now has indegree 0, it becomes safe
            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }
    return result.sort((a, b) => a - b);
}
