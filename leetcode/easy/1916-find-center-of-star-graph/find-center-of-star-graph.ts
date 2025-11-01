function findCenter(edges: number[][]): number {
    const firstEdge = edges[0];
    const secondEdge = edges[1];

    return secondEdge.includes(firstEdge[0]) ? firstEdge[0] : firstEdge[1];
};