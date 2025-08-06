function wiggleSort(nums: number[], debug: boolean = false): void {
  const n: number = nums.length;

  if (debug) {
    console.log(`\n=== WIGGLE SORT DEBUG ===`);
    console.log(`Original array: [${nums.join(", ")}]`);
    console.log(`Array length: ${n}`);
  }

  const median: number = findKthLargest(
    [...nums],
    Math.floor((n + 1) / 2),
    debug
  );

  if (debug) {
    console.log(`Median (${Math.floor((n + 1) / 2)}th largest): ${median}`);
    console.log(`\nStarting 3-way partitioning with virtual indexing...`);
    console.log(
      `Goal: elements > median go to odd positions, elements < median go to even positions`
    );
  }

  let left = 0,
    i = 0,
    right = n - 1;
  let stepCount = 0;

  while (i <= right) {
    const mappedIndex = newIndex(i, n);
    const currentElement = nums[mappedIndex];

    if (debug) {
      stepCount++;
      console.log(`\nStep ${stepCount}:`);
      console.log(
        `  Virtual index i=${i}, maps to real index=${mappedIndex}, value=${currentElement}`
      );
      console.log(`  Current array: [${nums.join(", ")}]`);
      console.log(`  Pointers: left=${left}, i=${i}, right=${right}`);
    }

    if (currentElement > median) {
      const leftMappedIndex = newIndex(left, n);
      if (debug) {
        console.log(
          `  ${currentElement} > ${median}: Move to left partition (position ${leftMappedIndex})`
        );
      }
      swap(nums, leftMappedIndex, mappedIndex);
      left++;
      i++;
    } else if (currentElement < median) {
      const rightMappedIndex = newIndex(right, n);
      if (debug) {
        console.log(
          `  ${currentElement} < ${median}: Move to right partition (position ${rightMappedIndex})`
        );
      }
      swap(nums, rightMappedIndex, mappedIndex);
      right--;
      // Don't increment i here - we need to check the swapped element
    } else {
      if (debug) {
        console.log(
          `  ${currentElement} = ${median}: Keep in middle, move to next`
        );
      }
      i++;
    }

    if (debug) {
      console.log(`  After operation: [${nums.join(", ")}]`);
    }
  }

  if (debug) {
    console.log(`\n=== FINAL RESULT ===`);
    console.log(`Wiggled array: [${nums.join(", ")}]`);
    console.log(
      `Verification: ${
        isValidWiggleSort(nums) ? "VALID" : "INVALID"
      } wiggle pattern`
    );
    console.log(`======================\n`);
  }
}

function newIndex(index: number, n: number): number {
  return (1 + 2 * index) % (n | 1);
}

/**
 * Helper function to visualize the index mapping
 */
function demonstrateIndexMapping(n: number): void {
  console.log(`\n🔄 INDEX MAPPING for array of length ${n}:`);
  console.log(
    `Formula: newIndex(i) = (1 + 2*i) % (${n} | 1) = (1 + 2*i) % ${n | 1}`
  );
  console.log(`Virtual → Real mapping:`);

  for (let i = 0; i < n; i++) {
    const mapped = newIndex(i, n);
    const position =
      i % 2 === 0 ? "even (small elements)" : "odd (large elements)";
    console.log(`  ${i} → ${mapped} (${position})`);
  }
  console.log(
    `This mapping ensures larger elements go to odd positions and smaller to even positions.\n`
  );
}

function swap(arr: number[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * Finds the kth largest element in the array using Quickselect.
 * @param nums The input array
 * @param k The 1-based index of the kth largest element
 * @param debug Whether to show debug information
 */
function findKthLargest(
  nums: number[],
  k: number,
  debug: boolean = false
): number {
  if (debug) {
    console.log(`Finding ${k}th largest element in [${nums.join(", ")}]`);
  }
  const result = quickSelect(nums, 0, nums.length - 1, nums.length - k);
  if (debug) {
    console.log(`${k}th largest element found: ${result}`);
  }
  return result;
}

function quickSelect(
  arr: number[],
  left: number,
  right: number,
  kSmallest: number
): number {
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

/**
 * Validates if an array follows the wiggle sort pattern: nums[0] < nums[1] > nums[2] < nums[3]...
 */
function isValidWiggleSort(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    if (i % 2 === 1) {
      // Odd index: should be greater than previous
      if (nums[i] <= nums[i - 1]) return false;
    } else {
      // Even index: should be less than previous
      if (nums[i] >= nums[i - 1]) return false;
    }
  }
  return true;
}

// ============= TEST CASES =============

function runTests(): void {
  console.log("🧪 RUNNING WIGGLE SORT II TEST CASES 🧪\n");

  // First, demonstrate the index mapping concept
  console.log("📚 UNDERSTANDING THE ALGORITHM:");
  console.log(
    "The key insight is using virtual indexing to place elements correctly:"
  );
  console.log("- Elements > median should go to odd positions (peaks)");
  console.log("- Elements < median should go to even positions (valleys)");
  console.log(
    "- The newIndex() function maps virtual indices to achieve this\n"
  );

  demonstrateIndexMapping(6); // Show mapping for a typical case

  const testCases = [
    {
      name: "Example 1 - Basic case",
      input: [1, 5, 1, 1, 6, 4],
      expected: "wiggle pattern",
    },
    {
      name: "Example 2 - Multiple duplicates",
      input: [1, 3, 2, 2, 3, 1],
      expected: "wiggle pattern",
    },
    {
      name: "Simple case - Small array",
      input: [1, 2, 3],
      expected: "wiggle pattern",
    },
    {
      name: "Edge case - Two elements",
      input: [2, 1],
      expected: "wiggle pattern",
    },
    {
      name: "Edge case - One element",
      input: [5],
      expected: "wiggle pattern",
    },
    {
      name: "Challenging case - Many duplicates",
      input: [4, 5, 5, 6, 6, 6],
      expected: "wiggle pattern",
    },
    {
      name: "Large case with duplicates",
      input: [1, 1, 2, 1, 2, 2, 1],
      expected: "wiggle pattern",
    },
  ];

  testCases.forEach((testCase, index) => {
    console.log(`\n📋 Test ${index + 1}: ${testCase.name}`);
    console.log(`Input: [${testCase.input.join(", ")}]`);

    const nums = [...testCase.input]; // Copy to avoid mutating original
    wiggleSort(nums, true); // Run with debug=true

    const isValid = isValidWiggleSort(nums);
    console.log(
      `✅ Result: ${isValid ? "PASS" : "FAIL"} - ${
        isValid ? "Valid" : "Invalid"
      } wiggle pattern`
    );

    if (nums.length > 1) {
      console.log(`Pattern verification:`);
      for (let i = 1; i < nums.length; i++) {
        const relation = i % 2 === 1 ? ">" : "<";
        const actual =
          nums[i - 1] < nums[i] ? "<" : nums[i - 1] > nums[i] ? ">" : "=";
        const status =
          (i % 2 === 1 && actual === ">") || (i % 2 === 0 && actual === "<")
            ? "✓"
            : "✗";
        console.log(
          `  nums[${
            i - 1
          }] ${actual} nums[${i}] (expected ${relation}) ${status}`
        );
      }
    }

    console.log(`${"=".repeat(50)}`);
  });
}

// Run the full test suite
runTests();

// Simple test to demonstrate the algorithm
console.log("🧪 WIGGLE SORT II DEMONSTRATION 🧪\n");

const testArray = [1, 5, 1, 1, 6, 4];
console.log(`Testing with array: [${testArray.join(", ")}]`);
demonstrateIndexMapping(testArray.length);
wiggleSort(testArray, true);
