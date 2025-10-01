function findRedundantDirectedConnection(edges: number[][]): number[] {
    // Step 1: Identify if any node has two parents (indegree > 1)
    const candidateEdges = findCandidateEdgesWithTwoParents(edges);

    // Step 2: Use Union-Find to detect cycles and determine which edge to remove
    if (candidateEdges.length === 0) {
        // Case: No node has two parents, so we just need to find the cycle-creating edge
        return findCycleCreatingEdge(edges);
    } else {
        // Case: Some node has two parents, need to determine which of the two edges to remove
        return determineEdgeToRemoveWithTwoParents(edges, candidateEdges);
    }
}

function findCandidateEdgesWithTwoParents(edges: number[][]): number[][] {
    // Build indegree map to find nodes with multiple parents
    const indegree = new Map<number, number>();

    // Count incoming edges for each node
    for (const edge of edges) {
        const child = edge[1];
        indegree.set(child, (indegree.get(child) || 0) + 1);
    }

    // Find the node that has indegree > 1 (multiple parents)
    let nodeWithTwoParents = -1;
    for (const [node, degree] of indegree.entries()) {
        if (degree > 1) {
            nodeWithTwoParents = node;
            break;
        }
    }

    // If no node has two parent, return empty array
    if (nodeWithTwoParents === -1) {
        return [];
    }

    // Return all edges that point to the node with two parents
    const candidateEdges: number[][] = [];
    for (const edge of edges) {
        if (edge[1] === nodeWithTwoParents) {
            candidateEdges.push(edge);
        }
    }

    return candidateEdges;
}

function findCycleCreatingEdge(edges: number[][]): number[] {
    // Find the maximum node number to initialize Union-Find
    let maxNode = 0;
    for (const edge of edges) {
        maxNode = Math.max(maxNode, edge[0], edge[1]);
    }

    // Initialize Union-Find structure
    const parent = initializeUnionFind(maxNode + 1);

    // Process edges in order and find the first one that creates a cycle
    for (const edge of edges) {
        const [from, to] = edge;

        // Check if these nodes are already connected (would create a cycle)
        if (findParent(parent, from) === findParent(parent, to)) {
            // this edge creates a cycle, so it's the redundant one
            return edge;
        }

        // Union the nodes since they're not connected yet
        unionNodes(parent, from, to);
    }

    // This shouldn't happen if input is valid, but return empty as fallback
    return [];
}

function determineEdgeToRemoveWithTwoParents(
    edges: number[][],
    candidateEdges: number[][]
): number[] {
    // Try removing the second candidate edge first (appears later in input)
    // If valid, return the second candidate edge
    // Otherwise, return the first edge

    const secondEdge = candidateEdges[1];

    // Test if graph is valid without the second edge
    if (isValidTreeWithoutEdge(edges, secondEdge)) {
        return secondEdge;
    }

    // If removing second edge doesn't work, remove the first edge
    return candidateEdges[0];
}

function isValidTreeWithoutEdge(edges: number[][], excludeEdge: number[]): boolean {
    // Find max node for Union-Find initialization
    let maxNode = 0;
    for (const edge of edges) {
        maxNode = Math.max(maxNode, edge[0], edge[1]);
    }

    // Initialize Union-Find
    const parent = initializeUnionFind(maxNode + 1);

    // Process all edges except the excluded one
    for (const edge of edges) {
        // Skip the edge we're testing to remove
        if (edge[0] === excludeEdge[0] && edge[1] === excludeEdge[1]) {
            continue;
        }

        const [from, to] = edge;

        // If adding this edge creates a cycle, the graph is invalid
        if (findParent(parent, from) === findParent(parent, to)) {
            return false; // Cycle detected, invalid tree
        }

        // Union the nodes
        unionNodes(parent, from, to);
    }

    return true;
}

function initializeUnionFind(n: number): number[] {
    // Initialize parent array for Union-Find
    // Each node is its own parent initially
    const parent = new Array(n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    return parent;
}

function findParent(parent: number[], x: number): number {
    // Path compression optimization
    // Find root parent of node x
    if (parent[x] !== x) {
        parent[x] = findParent(parent, parent[x]);
    }
    return parent[x];
}

function unionNodes(parent: number[], x: number, y: number): boolean {
    // Union two nodes in Union-Find structure
    // Return false if they are already connected (cycle detected)
    // Return true if successfully united
    const rootX = findParent(parent, x);
    const rootY = findParent(parent, y);

    // If they have the same root, they're already connected
    if (rootX === rootY) {
        return false; // Cycle detected
    }

    // Unit the two components by making one root point to the other
    parent[rootX] = rootY;
    return true; // Successfully united
}
