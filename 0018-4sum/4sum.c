int compare(const void* a, const void* b) { return (*(int*)a - *(int*)b); }

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume
 * caller calls free().
 */
int** fourSum(int* nums, int numsSize, int target, int* returnSize,
              int** returnColumnSizes) {
    // Initialize return size
    *returnSize = 0;

    // Edge case: not enough elements
    if (numsSize < 4) {
        return NULL;
    }

    // Sort the array using qsort
    qsort(nums, numsSize, sizeof(int), compare);

    // Allocate initial space for results (estimate)
    int capacity = 100;
    int** result = (int**)malloc(capacity * sizeof(int*));
    *returnColumnSizes = (int*)malloc(capacity * sizeof(int));

    // Four nested loops (outer two explicit, inner two via two-pointer)
    for (int i = 0; i < numsSize - 3; i++) {
        // Skip duplicates for first number
        if (i > 0 && nums[i] == nums[i - 1])
            continue;

        for (int j = i + 1; j < numsSize - 2; j++) {
            // Skip duplicates for second number
            if (j > i + 1 && nums[j] == nums[j - 1])
                continue;

            int left = j + 1;
            int right = numsSize - 1;

            while (left < right) {
                // Use long long to prevent overflow
                long long currentSum =
                    (long long)nums[i] + nums[j] + nums[left] + nums[right];

                if (currentSum == target) {
                    // Resize if needed
                    if (*returnSize >= capacity) {
                        capacity *= 2;
                        result =
                            (int**)realloc(result, capacity * sizeof(int*));
                        *returnColumnSizes = (int*)realloc(
                            *returnColumnSizes, capacity * sizeof(int));
                    }

                    // Allocate space for this quadruplet
                    result[*returnSize] = (int*)malloc(4 * sizeof(int));
                    result[*returnSize][0] = nums[i];
                    result[*returnSize][1] = nums[j];
                    result[*returnSize][2] = nums[left];
                    result[*returnSize][3] = nums[right];
                    (*returnColumnSizes)[*returnSize] = 4;
                    (*returnSize)++;

                    // Skip duplicates for third number
                    while (left < right && nums[left] == nums[left + 1]) {
                        left++;
                    }
                    // Skip duplicates for fourth number
                    while (left < right && nums[right] == nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (currentSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}