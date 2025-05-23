function maximumCount(nums: number[]): number {
    function lowerBound(nums: number[]): number {
        let index = nums.length;
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] < 0) {
                start = mid + 1;
            } else if (nums[mid] >= 0) {
                end = mid - 1;
                index = mid;
            }
        }
        return index;
    }
    function upperBound(nums: number[]): number {
        let index = nums.length;
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (nums[mid] <= 0) {
                start = mid + 1;
            } else if (nums[mid] > 0) {
                end = mid - 1;
                index = mid;
            }
        }
        return index;
    }
    const positiveCount = nums.length - upperBound(nums);
    const negativeCount = lowerBound(nums);
    return Math.max(positiveCount, negativeCount);
};