// Time O(V + E) where V is the number of rooms and E is total number of keys
// Space O(n)

function canVisitAllRooms(rooms: number[][]): boolean {
    const n = rooms.length;
    // visited set to track which room has been visited
    const visited = new Set<number>();
    visited.add(0);

    // queue of keys that are available to open rooms
    const queue: number[] = [0];

    while (queue.length > 0) {
        // get the current room
        const room = queue.shift()!;
        // each key in the room
        for (const key of rooms[room]!) {
            // visited does not yet have the key
            if (!visited.has(key)) {
                visited.add(key);
                queue.push(key);
            }
        }
    }

    return visited.size === n;
}
