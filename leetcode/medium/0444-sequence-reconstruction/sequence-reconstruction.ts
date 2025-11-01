function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {
    const n = nums.length;

    // create adjacency list
    const adjList = new Map<number, Set<number>>();

    // create in-degree map
    const inDegree = new Map<number, number>();

    // initialize all nodes
    for (const num of nums) {
        adjList.set(num, new Set());
        inDegree.set(num, 0);
    }

    // build the graph from sequences
    for (const seq of sequences) {
        // validate sequence elements
        for (const num of seq) {
            if (!inDegree.has(num)) {
                return false;
            }
        }

        // add edges for consecutive pairs in the sequence
        for (let i = 0; i < seq.length - 1; i++) {
            const from = seq[i];
            const to = seq[i + 1];

            // only add edge if it doesn't exist
            if (!adjList.get(from)!.has(to)) {
                adjList.get(from)!.add(to);
                inDegree.set(to, inDegree.get(to)! + 1);
            }
        }
    }

    // initialize queue with all nodes having inDegree of 0
    const queue: number[] = [];
    for (const num of nums) {
        if (inDegree.get(num) === 0) {
            queue.push(num);
        }
    }

    const result = [];
    let index = 0;

    // perform topological sort (Kahn's)
    while (queue.length > 0) {
        // if queue has more than one element, return false
        if (queue.length > 1) {
            return false;
        }

        const current = queue.shift()!;

        // check if this matches the expected order in nums
        if (current !== nums[index]) {
            return false;
        }

        // add the element to result
        result.push(current);
        index++;

        for (const neighbor of adjList.get(current)!) {
            inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    // check if we processed all nodes
    return result.length === n;
}