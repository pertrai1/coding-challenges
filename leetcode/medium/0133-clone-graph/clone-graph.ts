/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    if (!node) {
        return node;
    }
    const visited: Map<_Node, _Node> = new Map();
    function dfs(node: _Node): _Node {
        if (visited.has(node)) {
            return visited.get(node);
        }
        const cloneNode: _Node = new _Node(node.val, []);
        visited.set(node, cloneNode);

        for (const neighbor of node.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor))
        }
        return cloneNode;
    }
    return dfs(node);
};