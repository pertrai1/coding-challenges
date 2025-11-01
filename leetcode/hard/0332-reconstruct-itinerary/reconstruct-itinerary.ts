/**
Implementation of Hierholzer's algorithm for finding Eulerian paths
https://www.geeksforgeeks.org/dsa/hierholzers-algorithm-directed-graph/

Complexity: Time: O(t) where t is the ticket that needs to be processed and only each ticket can be processed once.
            Space: O(a) where a is the number of airports
*/
function findItinerary(tickets: string[][]): string[] {
    const graph = new Map<string, string[]>();
    for (const [src, dst] of tickets) {
        if (!graph.has(src)) {
            graph.set(src, []);
        }
        graph.get(src)!.push(dst);
    }

    for (const [src, _] of graph) {
        graph.get(src)!.sort();
    }

    const result: string[] = [];
    function dfs(airport: string) {
        const currentAirport = graph.get(airport);
        if (currentAirport) {
            while (graph.get(airport)!.length > 0) {
                const nextAirport = graph.get(airport)!.shift();
                if (nextAirport) {
                    dfs(nextAirport);
                }
            }
        }
        result.push(airport);
    }
    dfs('JFK');
    return result.reverse();
}
