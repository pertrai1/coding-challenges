function find(representative: number[], vertex: number): number {
    if (vertex === representative[vertex]) {
        return vertex;
    }
    representative[vertex] = find(representative, representative[vertex]);
    return representative[vertex];
}
function union(representative: number[], size: number[], vertex1: number, vertex2: number): boolean {
    vertex1 = find(representative, vertex1);
    vertex2 = find(representative, vertex2);

    if (vertex1 === vertex2) {
        return false
    }
    if (size[vertex1] < size[vertex2]) {
        representative[vertex1] = vertex2;
        size[vertex2] += size[vertex1];
    } else {
        representative[vertex2] = vertex1;
        size[vertex1] += size[vertex2]
    }
    return true;
}
function countComponents(n: number, edges: number[][]): number {
    const representative: number[] = new Array(n).fill(0).map((_, i) => i);
    const size: number[] = new Array(n).fill(1);

    let components = n;
    for (const [v, u] of edges) {
        if (union(representative, size, u, v)) {
            components--;
        }
    }

    return components;
};
