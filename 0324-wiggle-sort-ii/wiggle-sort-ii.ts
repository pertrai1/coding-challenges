function wiggleSort(nums: number[]): void {
    const n: number = nums.length;
    const median: number = findKthLargest([...nums], Math.floor((n + 1) / 2)); // Spread to avoid mutating original

    let left = 0, i = 0, right = n - 1;

    while (i <= right) {
        const mappedIndex = newIndex(i, n);
        if (nums[mappedIndex] > median) {
            swap(nums, newIndex(left++, n), mappedIndex);
            i++;
        } else if (nums[mappedIndex] < median) {
            swap(nums, newIndex(right--, n), mappedIndex);
        } else {
            i++;
        }
    }
}

function newIndex(index: number, n: number): number {
    return (1 + 2 * index) % (n | 1);
}

function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * Finds the kth largest element in the array using Quickselect.
 * @param nums The input array
 * @param k The 1-based index of the kth largest element
 */
function findKthLargest(nums: number[], k: number): number {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(arr: number[], left: number, right: number, kSmallest: number): number {
    if (left === right) return arr[left];

    const pivotIndex = partition(arr, left, right);

    if (kSmallest === pivotIndex) {
        return arr[kSmallest];
    } else if (kSmallest < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, kSmallest);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, kSmallest);
    }
}

function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivot) {
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }

    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    return storeIndex;
}
