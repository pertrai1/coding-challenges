export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function verticalTraversal(root: TreeNode | null): number[][] {
  // initialize a map where:
  // key = column index
  // value = array of [row, node.val]
  const valueMap = new Map<number, number[][]>();

  function traverse(node: TreeNode | null, row: number, col: number) {
    if (!node) return;

    // add the current node to the map
    if (!valueMap.has(col)) {
      valueMap.set(col, []);
    }
    valueMap.get(col)!.push([row, node.val]);
    // recurse left (col - 1) and right (col + 1) with row + 1
    traverse(node.left, row + 1, col - 1);
    traverse(node.right, row + 1, col + 1);
  }

  traverse(root, 0, 0);

  // sort columns left -> right
  const sortedCols = Array.from(valueMap.keys()).sort((a, b) => a - b);

  return sortedCols.map((col) => {
    // sort column entries: row -> value
    const sortedNodes = valueMap.get(col)!.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return sortedNodes.map((n) => n[1]);
  });
}
