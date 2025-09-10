function networkDelayTime(times: number[][], n: number, k: number): number {
    // Build adjacency list
    const graph: Map<number, number[][]> = new Map();
    for (let i = 1; i <= n; i++) {
        graph.set(i, []);
    }
    for (const [u, v, w] of times) {
        graph.get(u)!.push([v, w]); // u -> v with weight w
    }

    // initialize distances
    const distances = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    distances[k] = 0; // source node has distance 0

    // priority queue
    // use simple approach using array and sort over custom min-heap
    const pq: [number, number][] = [[0, k]]; // start with source node

    // visited
    const visited: Set<number> = new Set();

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [currentDistance, currentNode] = pq.shift();

        if (visited.has(currentNode)) {
            continue;
        }

        visited.add(currentNode);

        for (const [neighbor, weight] of graph.get(currentNode)!) {
            const newDistance = currentDistance + weight;
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                pq.push([newDistance, neighbor]);
            }
        }
    }

    let maxTime = 0;
    for (let node = 1; node <= n; node++) {
        if (distances[node] === Number.MAX_SAFE_INTEGER) {
            return -1;
        }
        maxTime = Math.max(maxTime, distances[node]);
    }

    return maxTime;
};