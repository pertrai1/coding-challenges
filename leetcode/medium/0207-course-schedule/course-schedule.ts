function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const indegree: number[] = new Array(numCourses).fill(0);
    const adjList: number[][] = new Array(numCourses).fill(0).map(() => []);
    for (const prerequisite of prerequisites) {
        adjList[prerequisite[1]].push(prerequisite[0]);
        indegree[prerequisite[0]]++;
    }

    const stack: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            stack.push(i);
        }
    }

    let nodesVisited: number = 0;

    while (stack.length > 0) {
        nodesVisited++;
        const node = stack.pop();
        for (const neighbor of adjList[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                stack.push(neighbor);
            }
        }
    }

    return nodesVisited === numCourses;
};