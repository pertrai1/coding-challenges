// finding an Eulerian path in a De Bruijn graph - directed graph representing overlaps between sequences
function crackSafe(n: number, k: number): string {
    // keep track of all the n-digit passwords we have already included in the path
    const visited = new Set<string>();

    // store the sequence of digits we append
    const result: string[] = [];

    // string of n-1 zeros
    let startNode: string = "0".repeat(n - 1);

    // depth first search
    function dfs(node: string): boolean {
        for (let digit = k - 1; digit >= 0; digit--) {
            const password = node + digit;
            if (!visited.has(password)) {
                visited.add(password);

                // the next node is the last n-1 characters of the password
                const nextNode = password.slice(1);
                if (dfs(nextNode)) {
                    // add digits to result (post-order traversal)
                    result.push(String(digit));
                    return true;
                }
            }
        }

        // check if we've visited all possible passwords
        return visited.size === Math.pow(k, n);
    }

    dfs(startNode);

    return startNode + result.reverse().join("");
}