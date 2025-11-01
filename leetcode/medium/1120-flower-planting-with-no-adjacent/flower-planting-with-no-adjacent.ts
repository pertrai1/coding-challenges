function gardenNoAdj(n: number, paths: number[][]): number[] {
    const adjList: number[][] = new Array(n).fill(null).map(() => []);
    const answer = new Array(n).fill(0);

    for (const [u, v] of paths) {
        adjList[u - 1].push(v - 1);
        adjList[v - 1].push(u - 1);
    }

    for (let i = 0; i < n; i++) {
        const used = new Array(5).fill(false);

        for (const neighbor of adjList[i]) {
            if (answer[neighbor] !== 0) {
                used[answer[neighbor]] = true;
            }
        }
        let c = 1;
        while (c <= 4 && used[c]) {
            c++;
        }
        answer[i] = c
    }
    return answer;
};