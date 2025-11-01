class UnionFind {
    parent: number[];
    rank: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.rank = Array(n + 1).fill(0);
    }

    find(x: number) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x: number, y: number) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) {
            return false;
        }

        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }

        return true;
    }
}

function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length;
    const uf = new UnionFind(n);

    for (const [u, v] of edges) {
        if (uf.find(u) === uf.find(v)) {
            return [u, v];
        }

        uf.union(u, v);
    }

    return [];
};