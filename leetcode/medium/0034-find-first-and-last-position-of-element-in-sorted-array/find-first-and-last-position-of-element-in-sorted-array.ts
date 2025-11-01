function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) {
        return [-1, -1];
    }
    return [findFirstPosition(nums, target), findLastPosition(nums, target)]
};

function findFirstPosition(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    let leftIndex = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] === target) {
            leftIndex = mid;
            high = mid - 1;
        }
    }
    return leftIndex;
}

function findLastPosition(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    let rightIndex = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] === target) {
            rightIndex = mid;
            low = mid + 1;
        }
    }
    return rightIndex;
}