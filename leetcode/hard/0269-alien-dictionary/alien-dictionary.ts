// Space O(k) | Time O(C) where C = total characters across all words
function alienOrder(words: string[]): string {
    const n = words.length;

    // B["Initialize graph (adjacency list) and indegree map"]
    // Since we are dealing with characters in alphabet, k is bounded by a constant (26 for English), which makes this O(k)
    const graph = new Map<string, Set<string>>(); // O(k)
    const indegree = new Map<string, number>(); // O(k)

    // C["Collect all unique characters from words"]
    // O(C) where C = sum of all word lengths
    for (const word of words) {
        for (const char of word) {
            // O(1) operations because this is a Map and unique characters from 26 in alphabet
            if (!graph.has(char)) {
                graph.set(char, new Set());
                indegree.set(char, 0);
            }
        }
    }

    // D["Compare adjacent words to build graph"]
    for (let i = 0; i < n - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

        // F["Find first differing character position"]
        let foundDiff = false;
        const minLen = Math.min(word1.length, word2.length);

        for (let j = 0; j < minLen; j++) {
            const char1 = word1[j];
            const char2 = word2[j];

            if (char1 !== char2) {
                // I{"Found differing characters?"}
                if (!graph.get(char1)!.has(char2)) {
                    // J["Add edge: char1 -> char2 in graph"]
                    graph.get(char1)!.add(char2);
                    // K["Increment indegree of char2"]
                    indegree.set(char2, indegree.get(char2)! + 1);
                }
                foundDiff = true;
                break;
            }
        }

        // G{"Is words1 a prefix of words2 but word1 is longer?"}
        if (!foundDiff && word1.length > word2.length) {
            // H["Return empty string (invalid order)"]
            return "";
        }
    }

    // N["Initialize queue with characters having indegree = 0"]
    const queue: string[] = []; // O(k)
    for (const [char, degree] of indegree) {
        if (degree === 0) {
            queue.push(char);
        }
    }

    // O["Initialize result string"]
    let result = ""; // O(k)

    // P{"Queue not empty?"} (Kahn's algorithm)
    while (queue.length > 0) {
        // Q["Dequeue character"]
        const current = queue.shift()!;

        // R["Append character to result"]
        result += current;

        // S["For each neighbor of current character"]
        for (const neighbor of graph.get(current)!) {
            // T["Decrement neighbor's indegree"]
            indegree.set(neighbor, indegree.get(neighbor)! - 1);

            // U{"Neighbor's indegree = 0?"}
            if (indegree.get(neighbor) === 0) {
                // V["Add neighbor to queue"]
                queue.push(neighbor);
            }
        }
    }

    // Y{"Result length = total unique characters?"}
    // ? Z["Return result string"]
    // : AA["Return empty string (cycle detected)"]
    return result.length === indegree.size ? result : "";
}