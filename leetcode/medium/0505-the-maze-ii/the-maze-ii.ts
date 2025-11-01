class MyPriorityQueue<T> {
    heap: { item: T, priority: number }[];

    constructor() {
        this.heap = [];
    }

    enqueue(item: T, priority: number) {
        this.heap.push({ item, priority });
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue(): T | null {
        if (this.isEmpty()) return null;

        const min = this.heap[0];
        const last = this.heap.pop()!;

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return min.item;
    }

    bubbleUp(index: number) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index].priority >= this.heap[parentIndex].priority) {
                break;
            }

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown(index: number) {
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
                smallest = leftChild;
            }

            if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    peek(): T | undefined {
        return this.heap[0]?.item;
    }
}

function shortestDistance(maze: number[][], start: number[], destination: number[]): number {
    const rows = maze.length;
    const cols = maze[0].length;

    // initialize 2D distance array with infinity to track the shortest distance to reach each cell
    const distance: number[][] = new Array(rows).fill(null).map(() => Array(cols).fill(Infinity));
    // start position has a distance of 0
    distance[start[0]][start[1]] = 0;

    const pq = new MyPriorityQueue<number[]>();
    // always process closest positions first (greedy approach)
    pq.enqueue([start[0], start[1]], 0);

    const directions = [
        [-1, 0],  // up:    dx=-1, dy=0
        [1, 0],   // down:  dx=1,  dy=0
        [0, -1],  // left:  dx=0,  dy=-1
        [0, 1]    // right: dx=0,  dy=1
    ];

    // while priority queue not empty
    while (!pq.isEmpty()) {
        // get the smallest distance. Key to Dijkstra's algorithm
        const position = pq.dequeue()!;
        const [row, col] = position;
        const currentDist = distance[row][col];

        // check if we reached destination
        if (row === destination[0] && col === destination[1]) {
            return currentDist;
        }

        // try rolling in all four directions
        for (const [dx, dy] of directions) {
            let newRow = row;
            let newCol = col;
            let steps = 0;

            // keep moving until we hit a wall or boundary and count steps taken
            while (
                newRow + dx >= 0 &&
                newRow + dx < rows &&
                newCol + dy >= 0 &&
                newCol + dy < cols &&
                maze[newRow + dx][newCol + dy] === 0
            ) {
                newRow += dx;
                newCol += dy;
                steps++;
            }

            const newDist = currentDist + steps;

            if (newDist < distance[newRow][newCol]) {
                distance[newRow][newCol] = newDist;
                pq.enqueue([newRow, newCol], newDist);
            }
        }
    }

    return -1;
}