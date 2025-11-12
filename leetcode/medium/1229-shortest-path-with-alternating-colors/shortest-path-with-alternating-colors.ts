function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    // build adjacency lists
    const redAdj: number[][] = Array(n).fill(null).map(() => []);
    const blueAdj: number[][] = Array(n).fill(null).map(() => []);

    // populate lists
    for (const [u, v] of redEdges) {
        redAdj[u].push(v);
    }
    for (const [u, v] of blueEdges) {
        blueAdj[u].push(v);
    }

    // initialize distances: dist[color][node]
    // color 0 = red, color 1 = blue
    const INF = Number.MAX_SAFE_INTEGER;
    const dist: number[][] = [
        Array(n).fill(INF), // distances when last edge was red
        Array(n).fill(INF) // distances when last esge was blue
    ];

    // starting distances
    dist[0][0] = 0; // can start with red edge from node 0
    dist[1][0] = 0; // can start with blue edge from node 0

    // BFS queue: [color, node]
    const queue: [number, number][] = [[0, 0], [1, 0]];
    let queueIndex = 0;

    while (queueIndex < queue.length) {
        const [color, node] = queue[queueIndex++]; // O(1) dequeue instead of O(n) shift
        // const [color, node] = queue.shift()!;
        const nextColor = 1 - color;

        if (color === 0) {
            // last edge was red (0), so the next must be blue
            for (const neighbor of blueAdj[node]) {
                if (dist[nextColor][neighbor] > dist[color][node] + 1) {
                    dist[nextColor][neighbor] = dist[color][node] + 1;
                    queue.push([nextColor, neighbor]);
                }
            }
        } else {
            // last edge was blue (1), so the next must be red
            for (const neighbor of redAdj[node]) {
                if (dist[nextColor][neighbor] > dist[color][node] + 1) {
                    dist[nextColor][neighbor] = dist[color][node] + 1;
                    queue.push([nextColor, neighbor]);
                }
            }
        }
    }

    const answer: number[] = [];
    for (let i = 0; i < n; i++) {
        const minDist = Math.min(dist[0][i], dist[1][i]);
        answer[i] = minDist === INF ? -1 : minDist;
    }

    return answer;
};
