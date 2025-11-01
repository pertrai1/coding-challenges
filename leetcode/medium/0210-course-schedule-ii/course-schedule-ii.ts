function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const indegree: number[] = new Array(numCourses).fill(0);
    const adjList: number[][] = new Array(numCourses).fill(0).map(() => []);

    for (const prerequisite of prerequisites) {
        adjList[prerequisite[1]].push(prerequisite[0]);
        indegree[prerequisite[0]]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    const result: number[] = [];
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);

        for (const course of adjList[node]) {
            indegree[course]--;
            if (indegree[course] === 0) {
                queue.push(course);
            }
        }
    }

    return result.length === numCourses ? result : [];
};
