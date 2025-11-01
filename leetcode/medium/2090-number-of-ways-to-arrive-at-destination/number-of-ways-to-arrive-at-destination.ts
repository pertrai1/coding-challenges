function countPaths(n: number, roads: number[][]): number {
  const MOD = 1_000_000_007;
  
  // build graph - using safer initialization
  const graph: [number, number][][] = Array.from({ length: n }, () => []);
 
  // add roads to graph
  for (const [u, v, time] of roads) {
    graph[u].push([v, time]); // u -> v with weight time
    graph[v].push([u, time]); // v -> u with weight time (bi-directional)
  }
  
  // initialize distances and ways
  const distances = Array(n).fill(Infinity);
  const ways = Array(n).fill(0);
  distances[0] = 0;
  ways[0] = 1;
  
  const pq = [[0, 0]]; // [distance, node]
  
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [currentDistance, currentNode] = pq.shift()!;
    
    if (currentDistance > distances[currentNode]) {
      continue;
    }
    
    for (const [neighbor, weight] of graph[currentNode]) {
      const newDistance = currentDistance + weight;
      
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        ways[neighbor] = ways[currentNode];
        pq.push([newDistance, neighbor]);
      } else if (newDistance === distances[neighbor]) {
        ways[neighbor] = (ways[neighbor] + ways[currentNode]) % MOD;
      }
    }
  }
  
  return ways[n - 1] % MOD;
}