function possibleBipartition(n: number, dislikes: number[][]): boolean {
    const adjacencyList = new Map<number, number[]>();
    for (const [personA, personB] of dislikes) {
        if (!adjacencyList.has(personA)) {
            adjacencyList.set(personA, []);
        }
        if (!adjacencyList.has(personB)) {
            adjacencyList.set(personB, []);
        }
        adjacencyList.get(personA)!.push(personB);
        adjacencyList.get(personB)!.push(personA);
    }

    const colors = new Array(n + 1).fill(-1);

    for (let i = 1; i <= n; i++) {
        if (colors[i] === -1) {
            const queue = [i];
            colors[i] = 0;

            while (queue.length > 0) {
                const node = queue.shift()!;

                if (adjacencyList.has(node)) {
                    for (const neighbor of adjacencyList.get(node)!) {
                        if (colors[neighbor] === -1) {
                            colors[neighbor] = 1 - colors[node];
                            queue.push(neighbor);
                        } else if (colors[neighbor] === colors[node]) {
                            return false;
                        }
                    }
                }
            }
        }
    }

    return true;
}