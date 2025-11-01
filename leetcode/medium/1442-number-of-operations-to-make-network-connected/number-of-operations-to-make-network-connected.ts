function makeConnected(n: number, connections: number[][]): number {
  // check if there are enough cables
  // need at least n - 1 cables to connect n computers
  if (connections.length < n - 1) {
    return -1;
  }

  // build adjacency list
  const graph = {};

  // initial empty arrays for all computers
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  // Add connections (bi-directional)
  for (const [a, b] of connections) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // DFS helper to explore a connected component
  function dfs(computer: number, visited: Set<number>) {
    visited.add(computer);

    // visit all connected computers
    for (const neighbor of graph[computer]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited);
      }
    }
  }

  // count connected components
  const visited = new Set<number>();
  let componentCount = 0;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      componentCount++;
      dfs(i, visited);
    }
  }

  return componentCount - 1;
}