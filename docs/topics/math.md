# Math for Data Structures and Algorithms

## Table of Contents

- [Goal and Scope](#goal-and-scope)
- [Core Foundations](#core-foundations)
  - [Arithmetic Operations](#arithmetic-operations)
  - [Algebraic Expressions](#algebraic-expressions)
  - [Sequences and Series](#sequences-and-series)
- [Discrete Mathematics Essentials](#discrete-mathematics-essentials)
  - [Set Theory](#set-theory)
  - [Logic and Proof Techniques](#logic-and-proof-techniques)
  - [Functions and Mappings](#functions-and-mappings)
  - [Combinatorics](#combinatorics)
- [Number Theory Basics](#number-theory-basics)
  - [Divisibility Rules](#divisibility-rules)
  - [Prime Numbers](#prime-numbers)
  - [Greatest Common Divisor (GCD)](#greatest-common-divisor-gcd)
  - [Modular Arithmetic](#modular-arithmetic)
- [Graph Theory Intuition](#graph-theory-intuition)
  - [Nodes and Edges](#nodes-and-edges)
  - [Graph Terminology](#graph-terminology)
  - [Common Graph Representations](#common-graph-representations)
- [Asymptotic Analysis and Growth Rates](#asymptotic-analysis-and-growth-rates)
  - [Big-O Notation](#big-o-notation)
  - [Logarithms in Algorithms](#logarithms-in-algorithms)
  - [Common Complexity Classes](#common-complexity-classes)
- [Probability and Expectation](#probability-and-expectation)
  - [Basic Probability Concepts](#basic-probability-concepts)
  - [Expected Value](#expected-value)
  - [Randomized Algorithms](#randomized-algorithms)
- [Basic Geometry](#basic-geometry)
  - [Distance Calculations](#distance-calculations)
  - [Areas and Intersections](#areas-and-intersections)
  - [Coordinate Geometry](#coordinate-geometry)
- [Learning Path: Math Alongside DS&A](#learning-path-math-alongside-dsa)
  - [Just-in-Time Learning](#just-in-time-learning)
  - [Suggested Order](#suggested-order)
- [Additional Resources](#additional-resources)

---

## Goal and Scope

This guide covers the **minimum mathematical knowledge** needed to understand and implement common data structures and algorithms. Rather than providing an exhaustive mathematical curriculum, it focuses on concepts that appear repeatedly in coding challenges and technical interviews.

**What this guide covers:**

- ✅ Math concepts that directly apply to algorithm design and analysis
- ✅ Practical formulas and techniques used in coding problems
- ✅ Just enough theory to understand why algorithms work
- ✅ Reference links for deeper exploration

**What this guide does NOT cover:**

- ❌ Advanced mathematics beyond algorithmic applications
- ❌ Formal mathematical proofs (only intuitive explanations)
- ❌ Topics rarely encountered in coding interviews

**Who this is for:**

- Developers preparing for technical interviews
- Self-taught programmers building foundational knowledge
- Students supplementing their CS coursework

---

## Core Foundations

### Arithmetic Operations

Understanding basic operations is crucial for algorithm implementation. Many LeetCode problems involve integer manipulation.

**Key Concepts:**

- **Integer Division**: `Math.floor(a / b)` gives the quotient, `a % b` gives the remainder
- **Overflow**: Be aware of integer limits (JavaScript uses 64-bit floats, so large integers can lose precision)
- **Negative Numbers**: Division and modulo behave differently with negatives in different languages

```javascript
// Integer division in JavaScript
const quotient = Math.floor(7 / 3); // 2
const remainder = 7 % 3; // 1

// Beware of negative modulo
console.log(-7 % 3); // -1 in JavaScript (not 2)

// To get positive modulo:
const positiveMod = (n, m) => ((n % m) + m) % m;
console.log(positiveMod(-7, 3)); // 2
```

**Common Problems:**

- [Reverse Integer](https://leetcode.com/problems/reverse-integer/) - Integer manipulation
- [Palindrome Number](https://leetcode.com/problems/palindrome-number/) - Digit extraction

**Resources:**

- [Khan Academy: Arithmetic](https://www.khanacademy.org/math/arithmetic) - Foundational concepts
- [Integer Overflow Explained](https://www.geeksforgeeks.org/integer-overflow/) - Understanding limits

---

### Algebraic Expressions

Algebra helps simplify problems and derive formulas for efficient solutions.

**Key Concepts:**

- **Variable substitution**: Replace complex expressions with simpler variables
- **Equation manipulation**: Rearrange equations to isolate unknowns
- **Sum formulas**: Quick calculation of series sums

**Essential Formulas:**

```
Sum of first n natural numbers: n * (n + 1) / 2
Sum of squares: n * (n + 1) * (2n + 1) / 6
Sum of arithmetic series: n * (first + last) / 2
```

```javascript
// Instead of looping to sum 1 to n:
const sumToN = (n) => (n * (n + 1)) / 2;
console.log(sumToN(100)); // 5050 (O(1) instead of O(n))

// Finding missing number in [1, n] array
const findMissing = (nums) => {
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
};
```

**Common Problems:**

- [Missing Number](https://leetcode.com/problems/missing-number/) - Sum formula application
- [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/) - Prefix sums

**Resources:**

- [Khan Academy: Algebra Basics](https://www.khanacademy.org/math/algebra) - Comprehensive algebra course
- [Math is Fun: Sequences](https://www.mathsisfun.com/algebra/sequences-series.html) - Series and sequences

---

### Sequences and Series

Understanding sequences helps with pattern recognition in algorithm problems.

**Key Concepts:**

- **Arithmetic Sequence**: Each term differs by a constant (e.g., 2, 5, 8, 11...)
  - Formula: `a_n = a_1 + (n-1) * d` where d is the common difference
- **Geometric Sequence**: Each term is multiplied by a constant (e.g., 2, 6, 18, 54...)
  - Formula: `a_n = a_1 * r^(n-1)` where r is the common ratio
- **Fibonacci Sequence**: Each term is the sum of the two preceding terms

```javascript
// Arithmetic sequence: nth term
const arithmeticNth = (first, diff, n) => first + (n - 1) * diff;

// Geometric sequence: nth term
const geometricNth = (first, ratio, n) => first * Math.pow(ratio, n - 1);

// Fibonacci (memoized)
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
```

**Common Problems:**

- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) - Fibonacci pattern
- [Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices/) - Sequence detection

**Resources:**

- [Brilliant.org: Sequences](https://brilliant.org/wiki/sequences/) - Interactive explanations
- [Fibonacci and Golden Ratio](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) - Pattern exploration

---

## Discrete Mathematics Essentials

Discrete math provides the theoretical foundation for computer science and algorithms.

### Set Theory

Sets are fundamental to understanding data structures and algorithm analysis.

**Key Concepts:**

- **Set**: An unordered collection of unique elements
- **Subset**: All elements of A are in B (A ⊆ B)
- **Union**: All elements in A or B (A ∪ B)
- **Intersection**: Elements in both A and B (A ∩ B)
- **Difference**: Elements in A but not in B (A \ B)
- **Cardinality**: Number of elements |A|

```javascript
// Set operations in JavaScript
const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...A, ...B]); // {1, 2, 3, 4, 5, 6}

// Intersection
const intersection = new Set([...A].filter((x) => B.has(x))); // {3, 4}

// Difference (A - B)
const difference = new Set([...A].filter((x) => !B.has(x))); // {1, 2}

// Check subset
const isSubset = (small, large) => [...small].every((x) => large.has(x));
```

**Common Problems:**

- [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) - Set intersection
- [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) - Set for uniqueness

**Resources:**

- [Khan Academy: Sets](https://www.khanacademy.org/math/statistics-probability/probability-library/basic-set-ops/v/intersection-and-union-of-sets) - Visual explanations
- [Brilliant.org: Set Theory](https://brilliant.org/wiki/set-theory/) - Interactive problems

---

### Logic and Proof Techniques

Understanding logical operations helps write correct conditional statements and reason about algorithm correctness.

**Key Concepts:**

- **AND (∧)**: Both conditions must be true
- **OR (∨)**: At least one condition must be true
- **NOT (¬)**: Negates a condition
- **De Morgan's Laws**: 
  - ¬(A ∧ B) = ¬A ∨ ¬B
  - ¬(A ∨ B) = ¬A ∧ ¬B
- **Implication (→)**: If A then B

```javascript
// De Morgan's Laws in code
// Instead of: !(a && b)
// Equivalent: !a || !b

// Practical example: checking if NOT in range [min, max]
const notInRange = (x, min, max) => x < min || x > max;
// Same as: !(x >= min && x <= max)

// Short-circuit evaluation
const result = condition && expensiveOperation(); // Only runs if condition is true
```

**Proof Techniques for Algorithms:**

- **Proof by Contradiction**: Assume the opposite, show it leads to a contradiction
- **Mathematical Induction**: Prove base case, then prove if true for n, it's true for n+1
- **Loop Invariants**: Properties that remain true before/after each loop iteration

**Resources:**

- [Khan Academy: Logic](https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/boolean-logic/a/boolean-operations) - Boolean logic basics
- [Proof Techniques](https://www.cs.cornell.edu/courses/cs2800/2017sp/lectures/lec04-direct.html) - Cornell CS notes

---

### Functions and Mappings

Functions describe relationships between sets, essential for understanding algorithms and data structures.

**Key Concepts:**

- **Function**: Maps each input to exactly one output
- **Domain**: Set of all possible inputs
- **Range/Codomain**: Set of all possible outputs
- **Injective (One-to-One)**: Different inputs → different outputs
- **Surjective (Onto)**: Every output has at least one input
- **Bijective**: Both injective and surjective (perfect pairing)

```javascript
// Hash functions map keys to indices (many-to-one)
const simpleHash = (key, size) => key.length % size;

// Index mappings (bijective for sorted arrays)
const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
```

**Relevance to DS&A:**

- Hash maps use hash functions to map keys to bucket indices
- Tree traversals define functions from nodes to visit orders
- Sorting algorithms establish bijections between positions

**Resources:**

- [Brilliant.org: Functions](https://brilliant.org/wiki/function-definition/) - Comprehensive guide
- [Khan Academy: Functions](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions) - Visual learning

---

### Combinatorics

Combinatorics deals with counting and arrangements, crucial for analyzing algorithm complexity and solving counting problems.

**Key Concepts:**

- **Factorial**: n! = n × (n-1) × ... × 1 (number of ways to arrange n items)
- **Permutations**: Ordered arrangements
  - P(n, r) = n! / (n-r)! (r items from n, order matters)
- **Combinations**: Unordered selections
  - C(n, r) = n! / (r! × (n-r)!) (r items from n, order doesn't matter)
- **Power Set**: All subsets of a set (2^n subsets)

```javascript
// Factorial
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Combinations (n choose r)
const combinations = (n, r) => {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  // Use dynamic programming to avoid overflow
  let result = 1;
  for (let i = 0; i < r; i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return Math.round(result);
};

// Generate all subsets (power set)
const subsets = (nums) => {
  const result = [[]];
  for (const num of nums) {
    const len = result.length;
    for (let i = 0; i < len; i++) {
      result.push([...result[i], num]);
    }
  }
  return result;
};
```

**Common Problems:**

- [Subsets](https://leetcode.com/problems/subsets/) - Power set generation
- [Permutations](https://leetcode.com/problems/permutations/) - All arrangements
- [Combination Sum](https://leetcode.com/problems/combination-sum/) - Backtracking with combinations

**Resources:**

- [Khan Academy: Combinatorics](https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations) - Video tutorials
- [Brilliant.org: Combinatorics](https://brilliant.org/wiki/combinatorics/) - Problem-based learning
- [CP Algorithms: Combinatorics](https://cp-algorithms.com/combinatorics/) - Advanced techniques

---

## Number Theory Basics

Number theory concepts appear frequently in coding challenges, especially those involving divisibility, primes, and modular operations.

### Divisibility Rules

Understanding divisibility helps optimize solutions and recognize patterns.

**Key Concepts:**

- **Divisible by 2**: Last digit is even
- **Divisible by 3**: Sum of digits divisible by 3
- **Divisible by 5**: Last digit is 0 or 5
- **Divisible by 9**: Sum of digits divisible by 9

```javascript
// Check divisibility
const isDivisibleBy = (num, divisor) => num % divisor === 0;

// Find all factors in O(√n)
const findFactors = (n) => {
  const factors = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) {
        factors.push(n / i);
      }
    }
  }
  return factors.sort((a, b) => a - b);
};
```

**Common Problems:**

- [The kth Factor of n](https://leetcode.com/problems/the-kth-factor-of-n/) - Factor enumeration
- [Count Primes](https://leetcode.com/problems/count-primes/) - Prime counting

**Resources:**

- [Math is Fun: Divisibility](https://www.mathsisfun.com/divisibility-rules.html) - Quick reference
- [Khan Academy: Factors](https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples) - Video explanations

---

### Prime Numbers

Primes are fundamental building blocks for integers and appear in many algorithm problems.

**Key Concepts:**

- **Prime**: A number greater than 1 with only 1 and itself as divisors
- **Prime Factorization**: Every integer > 1 can be expressed as a product of primes
- **Sieve of Eratosthenes**: Efficient algorithm to find all primes up to n

```javascript
// Check if prime in O(√n)
const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

// Sieve of Eratosthenes - find all primes up to n in O(n log log n)
const sieveOfEratosthenes = (n) => {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.map((prime, idx) => (prime ? idx : -1)).filter((x) => x !== -1);
};

// Prime factorization
const primeFactors = (n) => {
  const factors = [];
  let d = 2;
  while (d * d <= n) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }
    d++;
  }
  if (n > 1) factors.push(n);
  return factors;
};
```

**Common Problems:**

- [Count Primes](https://leetcode.com/problems/count-primes/) - Sieve application
- [Ugly Number II](https://leetcode.com/problems/ugly-number-ii/) - Prime factors

**Resources:**

- [Visualizing the Sieve](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) - Animated explanation
- [CP Algorithms: Primes](https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html) - Advanced techniques

---

### Greatest Common Divisor (GCD)

GCD is used in fraction simplification, array manipulation, and many mathematical problems.

**Key Concepts:**

- **GCD (Greatest Common Divisor)**: Largest number that divides both a and b
- **LCM (Least Common Multiple)**: Smallest number divisible by both a and b
- **Euclidean Algorithm**: Efficient GCD computation
- **Relationship**: LCM(a, b) × GCD(a, b) = a × b

```javascript
// GCD using Euclidean algorithm - O(log(min(a, b)))
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// Iterative version
const gcdIterative = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// LCM using GCD
const lcm = (a, b) => (a * b) / gcd(a, b);

// GCD of an array
const gcdArray = (arr) => arr.reduce((acc, val) => gcd(acc, val));

// Extended Euclidean Algorithm - finds x, y such that ax + by = gcd(a, b)
const extendedGcd = (a, b) => {
  if (b === 0) return { gcd: a, x: 1, y: 0 };
  const { gcd: g, x, y } = extendedGcd(b, a % b);
  return { gcd: g, x: y, y: x - Math.floor(a / b) * y };
};
```

**Common Problems:**

- [Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/) - GCD application
- [Water and Jug Problem](https://leetcode.com/problems/water-and-jug-problem/) - GCD for solvability

**Resources:**

- [Khan Academy: GCD and LCM](https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-factors-and-multiples) - Foundations
- [Euclidean Algorithm Visualized](https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/) - Step-by-step explanation

---

### Modular Arithmetic

Modular arithmetic is essential for handling large numbers and cyclic patterns.

**Key Concepts:**

- **Modulo Operation**: Remainder after division (a mod m)
- **Congruence**: a ≡ b (mod m) means a and b have the same remainder when divided by m
- **Properties**:
  - (a + b) mod m = ((a mod m) + (b mod m)) mod m
  - (a × b) mod m = ((a mod m) × (b mod m)) mod m
  - (a - b) mod m = ((a mod m) - (b mod m) + m) mod m
- **Modular Inverse**: a⁻¹ mod m exists if gcd(a, m) = 1

```javascript
const MOD = 1e9 + 7; // Common modulo value in competitive programming

// Modular addition
const modAdd = (a, b, m = MOD) => ((a % m) + (b % m)) % m;

// Modular multiplication
const modMult = (a, b, m = MOD) => ((a % m) * (b % m)) % m;

// Modular exponentiation - compute a^b mod m in O(log b)
const modPow = (base, exp, m = MOD) => {
  let result = 1n;
  base = BigInt(base) % BigInt(m);
  exp = BigInt(exp);
  m = BigInt(m);

  while (exp > 0n) {
    if (exp % 2n === 1n) {
      result = (result * base) % m;
    }
    exp = exp / 2n;
    base = (base * base) % m;
  }
  return Number(result);
};

// Modular inverse using Fermat's little theorem (when m is prime)
const modInverse = (a, m = MOD) => modPow(a, m - 2, m);
```

**Common Problems:**

- [Pow(x, n)](https://leetcode.com/problems/powx-n/) - Fast exponentiation
- [Super Pow](https://leetcode.com/problems/super-pow/) - Modular exponentiation

**Resources:**

- [Khan Academy: Modular Arithmetic](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic) - Intuitive introduction
- [CP Algorithms: Modular Arithmetic](https://cp-algorithms.com/algebra/module-inverse.html) - Advanced techniques

---

## Graph Theory Intuition

Graph theory provides the foundation for solving connectivity, pathfinding, and network problems.

### Nodes and Edges

**Key Concepts:**

- **Vertex (Node)**: A point in the graph
- **Edge**: A connection between two vertices
- **Directed Edge**: Has a direction (one-way)
- **Undirected Edge**: Bidirectional (two-way)
- **Weighted Edge**: Has an associated cost/distance

```javascript
// Different graph representations

// 1. Edge List
const edgeList = [
  [0, 1],
  [1, 2],
  [2, 0],
];

// 2. Adjacency Matrix (good for dense graphs)
const adjMatrix = [
  [0, 1, 1],
  [1, 0, 1],
  [1, 1, 0],
];

// 3. Adjacency List (good for sparse graphs)
const adjList = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1],
};

// Building adjacency list from edge list
const buildAdjList = (n, edges, directed = false) => {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    if (!directed) graph[v].push(u);
  }
  return graph;
};
```

---

### Graph Terminology

Understanding terminology is crucial for recognizing graph problems.

**Essential Terms:**

| Term | Definition |
|------|------------|
| **Path** | Sequence of vertices connected by edges |
| **Cycle** | Path that starts and ends at the same vertex |
| **Connected** | There's a path between every pair of vertices |
| **Degree** | Number of edges connected to a vertex |
| **In-degree** | Number of incoming edges (directed graphs) |
| **Out-degree** | Number of outgoing edges (directed graphs) |
| **Tree** | Connected graph with no cycles |
| **DAG** | Directed Acyclic Graph |
| **Bipartite** | Vertices can be split into two groups with edges only between groups |

```javascript
// Calculate degrees
const calculateDegrees = (n, edges) => {
  const inDegree = new Array(n).fill(0);
  const outDegree = new Array(n).fill(0);

  for (const [from, to] of edges) {
    outDegree[from]++;
    inDegree[to]++;
  }

  return { inDegree, outDegree };
};

// Check if graph has cycle (using DFS)
const hasCycle = (graph) => {
  const visited = new Set();
  const recursionStack = new Set();

  const dfs = (node) => {
    visited.add(node);
    recursionStack.add(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      } else if (recursionStack.has(neighbor)) {
        return true;
      }
    }

    recursionStack.delete(node);
    return false;
  };

  for (let i = 0; i < graph.length; i++) {
    if (!visited.has(i) && dfs(i)) return true;
  }
  return false;
};
```

---

### Common Graph Representations

**When to Use Each:**

| Representation | Space | Edge Check | Good For |
|---------------|-------|------------|----------|
| **Edge List** | O(E) | O(E) | Simple storage, sparse graphs |
| **Adjacency Matrix** | O(V²) | O(1) | Dense graphs, quick edge lookup |
| **Adjacency List** | O(V+E) | O(degree) | Most algorithms, sparse graphs |

**Common Problems:**

- [Clone Graph](https://leetcode.com/problems/clone-graph/) - Graph traversal
- [Course Schedule](https://leetcode.com/problems/course-schedule/) - Cycle detection
- [Number of Islands](https://leetcode.com/problems/number-of-islands/) - Connected components

**Resources:**

- [VisuAlgo: Graph](https://visualgo.net/en/graphds) - Interactive visualization
- [Khan Academy: Graph Theory](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs) - Comprehensive introduction
- [Graph Theory Tutorial](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/) - GeeksforGeeks guide

---

## Asymptotic Analysis and Growth Rates

Understanding how algorithms scale is fundamental to writing efficient code.

### Big-O Notation

Big-O describes the **upper bound** of an algorithm's growth rate as input size increases.

**Key Concepts:**

- Describes worst-case time/space complexity
- Focuses on dominant terms (ignore constants and lower-order terms)
- Compares algorithms' scalability

**Common Complexities (fastest to slowest):**

| Big-O | Name | Example |
|-------|------|---------|
| O(1) | Constant | Array access, hash lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single loop |
| O(n log n) | Linearithmic | Merge sort, heap sort |
| O(n²) | Quadratic | Nested loops |
| O(n³) | Cubic | Triple nested loops |
| O(2^n) | Exponential | Subset generation |
| O(n!) | Factorial | Permutation generation |

```javascript
// O(1) - Constant
const getFirst = (arr) => arr[0];

// O(log n) - Logarithmic
const binarySearch = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

// O(n) - Linear
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

// O(n log n) - Merge Sort
const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

// O(n²) - Nested loops
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
```

---

### Logarithms in Algorithms

Logarithms appear frequently in algorithm analysis, especially for divide-and-conquer and tree-based structures.

**Key Concepts:**

- **Division counting**: log₂(n) tells how many times you can divide n by 2 before reaching 1
- **Tree height**: log₂(n) approximates the height of a balanced binary tree with n nodes
- **Bit representation**: log₂(n) indicates the number of bits needed to represent n

**Important Properties:**

```
log(a × b) = log(a) + log(b)
log(a / b) = log(a) - log(b)
log(a^b) = b × log(a)
log₂(n) ≈ 3.32 × log₁₀(n)
```

```javascript
// Calculating log base 2
const log2 = (n) => Math.log2(n);
const log2Floor = (n) => Math.floor(Math.log2(n));

// Number of bits needed to represent n
const bitsNeeded = (n) => (n === 0 ? 1 : Math.floor(Math.log2(n)) + 1);

// Height of balanced binary tree
const treeHeight = (n) => Math.ceil(Math.log2(n + 1));
```

**Where Logs Appear:**

- Binary search: O(log n)
- Balanced trees: O(log n) operations
- Merge sort: O(n log n)
- Quick select average: O(n) with O(log n) recursion depth

---

### Common Complexity Classes

Understanding complexity classes helps choose the right algorithm based on input size.

**Practical Guidelines:**

| Input Size (n) | Acceptable Complexity |
|----------------|----------------------|
| n ≤ 10 | O(n!) or O(2^n) |
| n ≤ 20 | O(2^n) |
| n ≤ 100 | O(n³) |
| n ≤ 1,000 | O(n²) |
| n ≤ 100,000 | O(n log n) |
| n ≤ 10,000,000 | O(n) |
| n > 10,000,000 | O(log n) or O(1) |

**Resources:**

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/) - Visual complexity reference
- [MIT: Analysis of Algorithms](https://ocw.mit.edu/courses/6-046j-introduction-to-algorithms-sma-5503-fall-2005/) - In-depth course
- [Khan Academy: Asymptotic Notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation) - Beginner-friendly explanation

---

## Probability and Expectation

Probability concepts help analyze randomized algorithms and understand average-case complexity.

### Basic Probability Concepts

**Key Concepts:**

- **Probability**: P(A) = favorable outcomes / total outcomes (0 ≤ P(A) ≤ 1)
- **Complement**: P(not A) = 1 - P(A)
- **Independence**: P(A and B) = P(A) × P(B) if A and B are independent
- **Union**: P(A or B) = P(A) + P(B) - P(A and B)

```javascript
// Probability of rolling at least one 6 in n dice rolls
const atLeastOneSix = (n) => 1 - Math.pow(5 / 6, n);

// Birthday problem: probability of shared birthday in group of n
const birthdayProblem = (n) => {
  if (n > 365) return 1;
  let prob = 1;
  for (let i = 0; i < n; i++) {
    prob *= (365 - i) / 365;
  }
  return 1 - prob;
};
```

---

### Expected Value

Expected value represents the average outcome of a random variable.

**Key Concepts:**

- **E[X]** = Σ (value × probability)
- **Linearity**: E[X + Y] = E[X] + E[Y] (always true, even if dependent)

```javascript
// Expected value of a die roll
// E[X] = 1*(1/6) + 2*(1/6) + 3*(1/6) + 4*(1/6) + 5*(1/6) + 6*(1/6) = 3.5

// Coupon collector problem: expected tries to collect all n coupons
// E[X] = n * (1 + 1/2 + 1/3 + ... + 1/n) ≈ n * ln(n)
const couponCollector = (n) => {
  let expected = 0;
  for (let i = 1; i <= n; i++) {
    expected += n / i;
  }
  return expected;
};
```

---

### Randomized Algorithms

Randomization can simplify algorithms and improve average-case performance.

**Key Concepts:**

- **Las Vegas**: Always correct, random running time (e.g., randomized QuickSort)
- **Monte Carlo**: Fixed running time, might be incorrect (e.g., primality testing)

```javascript
// Fisher-Yates shuffle - O(n) uniform random permutation
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Randomized QuickSort (Las Vegas)
const randomizedQuickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;

  // Random pivot selection
  const pivotIdx = left + Math.floor(Math.random() * (right - left + 1));
  [arr[pivotIdx], arr[right]] = [arr[right], arr[pivotIdx]];

  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];

  randomizedQuickSort(arr, left, i - 1);
  randomizedQuickSort(arr, i + 1, right);
  return arr;
};
```

**Common Problems:**

- [Shuffle an Array](https://leetcode.com/problems/shuffle-an-array/) - Fisher-Yates
- [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/) - Weighted random selection

**Resources:**

- [Khan Academy: Probability](https://www.khanacademy.org/math/statistics-probability/probability-library) - Foundations
- [Randomized Algorithms](https://www.geeksforgeeks.org/randomized-algorithms/) - Algorithm applications
- [Expected Value](https://brilliant.org/wiki/expected-value/) - Interactive examples

---

## Basic Geometry

Geometric concepts appear in problems involving distance, area, and spatial relationships.

### Distance Calculations

**Key Formulas:**

- **Euclidean Distance**: √((x₂-x₁)² + (y₂-y₁)²)
- **Manhattan Distance**: |x₂-x₁| + |y₂-y₁|
- **Chebyshev Distance**: max(|x₂-x₁|, |y₂-y₁|)

```javascript
// Euclidean distance
const euclidean = (p1, p2) =>
  Math.sqrt(Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2));

// Manhattan distance (grid movement: up/down/left/right)
const manhattan = (p1, p2) =>
  Math.abs(p2[0] - p1[0]) + Math.abs(p2[1] - p1[1]);

// Chebyshev distance (grid movement: including diagonals)
const chebyshev = (p1, p2) =>
  Math.max(Math.abs(p2[0] - p1[0]), Math.abs(p2[1] - p1[1]));

// Squared distance (avoid sqrt for comparison)
const squaredDist = (p1, p2) =>
  Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2);
```

---

### Areas and Intersections

**Key Formulas:**

- **Triangle Area**: |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)| / 2
- **Rectangle Overlap**: Check if ranges overlap in both dimensions

```javascript
// Triangle area using cross product
const triangleArea = (p1, p2, p3) =>
  Math.abs(p1[0] * (p2[1] - p3[1]) + p2[0] * (p3[1] - p1[1]) + p3[0] * (p1[1] - p2[1])) / 2;

// Check if two rectangles overlap
const rectanglesOverlap = (r1, r2) => {
  // r1 = [x1, y1, x2, y2], r2 = [x3, y3, x4, y4]
  return r1[0] < r2[2] && r1[2] > r2[0] && r1[1] < r2[3] && r1[3] > r2[1];
};

// Calculate overlap area
const overlapArea = (r1, r2) => {
  const x_overlap = Math.max(0, Math.min(r1[2], r2[2]) - Math.max(r1[0], r2[0]));
  const y_overlap = Math.max(0, Math.min(r1[3], r2[3]) - Math.max(r1[1], r2[1]));
  return x_overlap * y_overlap;
};
```

---

### Coordinate Geometry

**Key Concepts:**

- **Slope**: (y₂-y₁)/(x₂-x₁)
- **Collinearity**: Three points on same line (cross product = 0)
- **Convex Hull**: Smallest convex polygon containing all points

```javascript
// Check if three points are collinear
const areCollinear = (p1, p2, p3) => {
  // Cross product of vectors (p1p2) and (p1p3) should be 0
  return (
    (p2[1] - p1[1]) * (p3[0] - p2[0]) === (p3[1] - p2[1]) * (p2[0] - p1[0])
  );
};

// Orientation of three points: 0 = collinear, 1 = clockwise, 2 = counterclockwise
const orientation = (p1, p2, p3) => {
  const val =
    (p2[1] - p1[1]) * (p3[0] - p2[0]) - (p2[0] - p1[0]) * (p3[1] - p2[1]);
  if (val === 0) return 0;
  return val > 0 ? 1 : 2;
};
```

**Common Problems:**

- [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/) - Distance calculation
- [Rectangle Overlap](https://leetcode.com/problems/rectangle-overlap/) - Intersection detection
- [Valid Square](https://leetcode.com/problems/valid-square/) - Geometric validation

**Resources:**

- [Geometry for Competitive Programming](https://cp-algorithms.com/geometry/) - Comprehensive reference
- [Khan Academy: Geometry](https://www.khanacademy.org/math/geometry) - Visual learning
- [Computational Geometry](https://www.geeksforgeeks.org/geometric-algorithms/) - Algorithm implementations

---

## Learning Path: Math Alongside DS&A

### Just-in-Time Learning

**Philosophy**: Learn math concepts as you encounter them in problems, not beforehand. This provides:

- Immediate practical application
- Better retention through context
- Motivation from seeing real use cases

**Approach:**

1. **Start solving problems** at your level
2. **When stuck**, identify the mathematical concept involved
3. **Learn just enough** to understand and solve that problem
4. **Reinforce** by solving similar problems
5. **Move on** to new concepts as needed

```
Problem-First Learning Loop:

┌─────────────────────────────────────────┐
│                                         │
│  Encounter    Identify     Learn        │
│  Problem  →   Gap      →   Concept   →  │
│                                         │
│  ←  Apply  ←  Practice  ←  Solve        │
│                                         │
└─────────────────────────────────────────┘
```

---

### Suggested Order

**Phase 1: Foundation (Start Here)**

1. **Basic Arithmetic** - Integer operations, modulo
2. **Big-O Notation** - Essential for all algorithm analysis
3. **Logarithms** - Understand O(log n) and binary search
4. **Sets** - Foundation for hash tables and graph algorithms

**Phase 2: Core Skills (After 50+ Easy Problems)**

5. **Combinatorics Basics** - Permutations, combinations for backtracking
6. **Graph Terminology** - Prepare for graph problems
7. **Sequences** - Recognize patterns in DP problems
8. **GCD/LCM** - Common in math-focused problems

**Phase 3: Advanced Topics (After 100+ Problems)**

9. **Number Theory** - Primes, modular arithmetic
10. **Probability** - Randomized algorithms, expected value
11. **Geometry** - Coordinate-based problems
12. **Advanced Combinatorics** - Complex counting problems

**Resource Pairing:**

| Topic | Primary Resource | Practice |
|-------|-----------------|----------|
| Big-O | Big-O Cheat Sheet | Any algorithm problem |
| Logarithms | Khan Academy | Binary Search problems |
| Sets | Brilliant.org | Hash table problems |
| Combinatorics | Khan Academy | Backtracking problems |
| Graph Theory | VisuAlgo | Graph traversal problems |
| Number Theory | CP Algorithms | Math-tagged LeetCode |
| Probability | Brilliant.org | Randomized problems |
| Geometry | CP Algorithms | Geometry-tagged problems |

---

## Additional Resources

### Comprehensive Math Courses

- [Khan Academy Mathematics](https://www.khanacademy.org/math) - Free, comprehensive, video-based
- [MIT OpenCourseWare: Mathematics for CS](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/) - College-level discrete math
- [Brilliant.org](https://brilliant.org/) - Interactive problem-based learning

### Algorithm-Focused Math

- [CP Algorithms](https://cp-algorithms.com/) - Competitive programming mathematics
- [GeeksforGeeks Math Algorithms](https://www.geeksforgeeks.org/mathematical-algorithms/) - Implementation-focused
- [TopCoder Math Tutorial](https://www.topcoder.com/community/competitive-programming/tutorials/mathematics-for-topcoders/) - Contest math

### Books

- **"Discrete Mathematics and Its Applications"** by Kenneth Rosen - Standard textbook
- **"Concrete Mathematics"** by Knuth, Graham, Patashnik - CS-focused math
- **"Introduction to Algorithms (CLRS)"** - Math sections integrated with algorithms

### Interactive Learning

- [VisuAlgo](https://visualgo.net/) - Algorithm visualization
- [Algorithm Visualizer](https://algorithm-visualizer.org/) - Interactive demonstrations
- [Project Euler](https://projecteuler.net/) - Math-heavy programming challenges

### Video Resources

- [3Blue1Brown](https://www.youtube.com/c/3blue1brown) - Beautiful math visualizations
- [MIT 6.042J](https://www.youtube.com/playlist?list=PLB7540DEDD482705B) - Full discrete math course
- [Abdul Bari](https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw) - Algorithm complexity analysis

### Practice Platforms

- [LeetCode Math Problems](https://leetcode.com/tag/math/) - Curated math problems
- [HackerRank Mathematics](https://www.hackerrank.com/domains/mathematics) - Math challenges
- [Codeforces Math Tag](https://codeforces.com/problemset?tags=math) - Competitive programming

---

**Remember**: You don't need to be a mathematician to excel at algorithms. Focus on building intuition, recognize patterns, and learn concepts as you need them. The goal is practical application, not theoretical mastery.