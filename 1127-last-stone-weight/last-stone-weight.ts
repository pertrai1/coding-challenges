function lastStoneWeight(stones: number[]): number {
  function removeLargest() {
    let largestIndex = stones.indexOf(Math.max(...stones));
    const val = stones[largestIndex];
    stones.splice(largestIndex, 1);
    return val;
  }
  while (stones.length > 1) {
    let stone1 = removeLargest();
    let stone2 = removeLargest();
    if (stone1 !== stone2) {
      stones.push(stone1 - stone2);
    }
  }
  
  return stones.length > 0 ? stones[0] : 0;
};