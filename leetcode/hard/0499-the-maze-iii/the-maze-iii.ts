class MyPriorityQueue {
    queue;

    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
        this.queue.sort((a, b) => {
            if (a[0] !== b[0]) return a[0] - b[0];
            return a[1].localeCompare(b[1]);
        });
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peak() {
        return this.queue[0];
    }
}
function findShortestWay(maze: number[][], ball: number[], hole: number[]): string {
    const m = maze.length;
    const n = maze[0].length;

    const distance = Array.from({ length: m }, () => Array.from({ length: n }, () => [Infinity, '']));
    distance[ball[0]][ball[1]] = [0, '']

    // min-priority queue
    const pq = new MyPriorityQueue();
    pq.enqueue([0, '', ball[0], ball[1]]);

    const directions = [
        [1, 0, 'd'], // down
        [0, -1, 'l'], // left
        [0, 1, 'r'], // right
        [-1, 0, 'u'] // up
    ];

    while (!pq.isEmpty()) {
        const [totalDistance, path, row, col] = pq.dequeue();

        if (totalDistance > distance[row][col][0] || (totalDistance === distance[row][col][0] && path > distance[row][col][1])) {
            continue;
        }

        // try each direction
        for (const [dr, dc, dir] of directions) {
            let newRow = row;
            let newCol = col;
            let steps = 0;

            // roll the ball until it hits the wall or reaches the hole
            while (newRow + dr >= 0 && newRow + dr < m && newCol + dc >= 0 && newCol + dc < n && maze[newRow + dr][newCol + dc] === 0) {
                newRow += dr;
                newCol += dc;
                steps++;

                // if we reach the hole, stop rolling
                if (newRow === hole[0] && newCol === hole[1]) {
                    break;
                }
            }

            // if not movement happened, skip this direction
            if (steps === 0) {
                continue;
            }

            const newDistance = totalDistance + steps;
            const newPath = path + dir;

            // check if this is a better path to the new position
            if (newDistance < distance[newRow][newCol][0] || (newDistance === distance[newRow][newCol][0] && newPath < distance[newRow][newCol][1])) {
                distance[newRow][newCol] = [newDistance, newPath];

                // only add to queue if we have not reached the hole
                if (!(newRow === hole[0] && newCol === hole[1])) {
                    pq.enqueue([newDistance, newPath, newRow, newCol]);
                }
            }
        }
    }

    const [finalDistance, finalPath] = distance[hole[0]][hole[1]];
    return finalDistance === Infinity ? 'impossible' : finalPath as string;
}