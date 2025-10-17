function loudAndRich(richer: number[][], quiet: number[]): number[] {
    const n = quiet.length;

    const graph = new Map<number, number[]>();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (const [a, b] of richer) {
        graph.get(b)!.push(a);
    }

    const answer: number[] = new Array(n).fill(-1);

    function dfs(x: number): number {
        if (answer[x] !== -1) {
            return answer[x];
        }

        let candidate = x;

        for (const neighbor of graph.get(x)!) {
            const quietnessAmongRicher = dfs(neighbor);

            if (quiet[quietnessAmongRicher] < quiet[candidate]) {
                candidate = quietnessAmongRicher;
            }
        }

        answer[x] = candidate;
        return candidate;
    }

    for (let i = 0; i < n; i++) {
        if (answer[i] === -1) {
            dfs(i);
        }
    }

    return answer;
}