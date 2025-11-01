function findJudge(n: number, trust: number[][]): number {
    if (n === 1 && trust.length === 0) {
        return 1;
    }
    const inDegree = new Array(n + 1).fill(0);
    const outDegree = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        outDegree[a]++;
        inDegree[b]++;
    }

    for (let person = 1; person <= n; person++) {
        if (inDegree[person] === n - 1 && outDegree[person] === 0) {
            return person;
        }
    }

    return -1;
};