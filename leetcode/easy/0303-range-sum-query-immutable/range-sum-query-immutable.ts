class NumArray {
  prefixSums: number[];

  constructor(nums: number[]) {
    this.prefixSums = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.prefixSums[i + 1] = nums[i] + this.prefixSums[i];
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) {
      return this.prefixSums[right + 1];
    } else {
      return this.prefixSums[right + 1] - this.prefixSums[left];
    }
  }
}
