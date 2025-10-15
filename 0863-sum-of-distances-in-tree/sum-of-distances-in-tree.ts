// brute force - O(n2) - what is the simplest way that defintely works?
// below is re-rooting that moves the complexity to O(n)
function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    // use an adjacency list that holds the index and an array of nodes with indegree
    const adjacencyList = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
        adjacencyList.set(i, []);
    }
    // since this is undirected, we need to track bi-direction between the nodes
    for (const [a, b] of edges) {
        adjacencyList.get(a)!.push(b);
        adjacencyList.get(b)!.push(a);
    }

    const answer: number[] = new Array(n).fill(0);
    const count: number[] = new Array(n).fill(1); // each node counts for itself

    // calculate answer[0] and subtree sizes - bottom up approach
    function dfs1(node: number, parent: number) {
        for (const child of adjacencyList.get(node)!) {
            if (child !== parent) {
                dfs1(child, node);
                count[node] += count[child];
                answer[0] += answer[child] + count[child];
            }
        }
    }

    // re-root to calculate answer for all other nodes - top down approach
    function dfs2(node: number, parent: number) {
        for (const child of adjacencyList.get(node)!) {
            if (child !== parent) {
                // when we move root from node to child:
                // - Nodes in child's subtree get 1 step closer
                // - Nodes outside child's subtree get 1 step farther (add n - count[child])
                answer[child] = answer[node] - count[child] + (n - count[child]);
                dfs2(child, node);
            }
        }
    }

    dfs1(0, -1);
    dfs2(0, -1);
    return answer;
}