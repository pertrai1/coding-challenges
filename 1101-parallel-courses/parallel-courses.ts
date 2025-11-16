function minimumSemesters(n: number, relations: number[][]): number {
    const adjList: number[][] = new Array(n + 1).fill(null).map(() => []);
    const inDegree: number[] = new Array(n + 1).fill(0);

    for (const [prerequisite, course] of relations) {
        adjList[prerequisite].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let semesters = 0;
    let coursesCompleted = 0;
    let index = 0;

    while (index < queue.length) {
        semesters++;
        const currentSemesterEnd = queue.length;

        while (index < currentSemesterEnd) {
            const course = queue[index++];
            coursesCompleted++;

            for (const dependentCourse of adjList[course]) {
                inDegree[dependentCourse]--;
                if (inDegree[dependentCourse] === 0) {
                    queue.push(dependentCourse);
                }
            }
        }
    }

    return coursesCompleted === n ? semesters : -1;
}