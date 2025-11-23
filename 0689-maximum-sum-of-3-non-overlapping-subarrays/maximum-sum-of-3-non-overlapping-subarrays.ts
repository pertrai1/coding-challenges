/*
Complexity:
Space: O(n) for each array that is being created
Time: O(n) for each array that has to be iterated
*/
function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
    // Step 1: Precompute the sum of every k-length subarray using sliding window
    const n = nums.length;
    const sums: number[] = new Array(n - k + 1);

    // Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]!;
    }
    sums[0] = windowSum;

    // Slide the window: remove leftmost element, add new rightmost element
    for (let i = 1; i <= n - k; i++) {
        windowSum = windowSum - nums[i - 1]! + nums[i + k - 1]!;
        sums[i] = windowSum;
    }
    // Step 2: Build leftBest array to store the starting index of the best (max sum, lex smallest) subarray in [0, i]
    // leftBest[i] = starting index of the subarray with maximum sum in range [0...i]
    const leftBest: number[] = new Array(n - k + 1);
    leftBest[0] = 0; // First position, only one choice

    for (let i = 1; i <= n - k; i++) {
        // Compare current subarray sum with the best one found so far
        // Use >= to prefer earlier (lexicographically smaller) indices when sums are equal
        if (sums[i]! > sums[leftBest[i - 1]!]!) {
            leftBest[i] = i; // Current position has better sum
        } else {
            leftBest[i] = leftBest[i - 1]!; // Previous best is still the best
        }
    }
    // Step 3: Build rightBest array to store the starting index of the best subarray in [i, n - k]
    // rightBest[i] = starting index of the subarray with maximum sum in range [i...n-k]
    const rightBest: number[] = new Array(n - k + 1);
    rightBest[n - k] = n - k; // Last position, only one choice

    // Build from right to left (reverse of leftBest)
    for (let i = n - k - 1; i >= 0; i--) {
        // Compare current subarray sum with the best one found so far (to the right)
        // Use >= to prefer later (lexicographically larger) indices when sums are equal
        // This ensures when we pick the triple, we get the lexicographically smallest result
        if (sums[i]! >= sums[rightBest[i + 1]!]!) {
            rightBest[i] = i; // Current position has better or equal sum
        } else {
            rightBest[i] = rightBest[i + 1]!; // Right best is still the best
        }
    }
    // Step 4: Iterate over all valid middle subarray start positions (from k to n - 2*k)
    //         - Use leftBest to get best left subarray before current middle
    //         - Use rightBest to get best right subarray after current middle
    //         - Compute total sum of left + middle + right
    //         - Track the maximum total sum and corresponding indices (ensuring lexicographically smallest)
    let maxSum = 0;
    let result: number[] = [-1, -1, -1];

    // Iterate over all valid middle subarray positions
    // Middle must have space for left (k elements) and right (k elements)
    for (let mid = k; mid <= n - 2 * k; mid++) {
        // Get the best left subarray ending before mid starts
        const left = leftBest[mid - k]!;

        // Get the best right subarray starting after mid ends
        const right = rightBest[mid + k]!;

        // Calculate total sum of the three subarrays
        const totalSum = sums[left]! + sums[mid]! + sums[right]!;

        // Update result if we found a better sum
        // Use > (not >=) to prefer lexicographically smallest when sums are equal
        if (totalSum > maxSum) {
            maxSum = totalSum;
            result = [left, mid, right];
        }
    }

    // Step 5: Return the triplet of indices [leftStart, midStart, rightStart]
    return result;
}