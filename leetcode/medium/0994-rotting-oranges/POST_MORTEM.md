# Interview Debrief — Rotting Oranges

**Date:** 2026-02-10
**Problem:** [994 - Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) — Medium
**Duration:** ~90 minutes (estimated based on 4 TDD cycles)
**Mode:** Guided TDD (Coach Mode)

---

## Session Overview

The candidate successfully solved Rotting Oranges using a guided TDD approach in coach mode. They demonstrated solid pattern recognition (correctly identified BFS early in the session) and implemented a clean level-by-level BFS solution after receiving Level 2 hints for the more complex aspects (bounds checking and level tracking). The candidate wrote all implementation code independently, showed good debugging skills when issues arose, and progressively took ownership of test design as the session progressed. Overall performance indicates a solid mid-level engineer with room for growth in translating conceptual understanding to code.

---

## Problem Solving

Score: 4/5

**Strengths:**

- Correctly identified BFS as the appropriate pattern in the initial pattern checkpoint, demonstrating good algorithmic intuition
- Understood the "shortest path" nature of the problem and why breadth-first traversal guarantees the minimum minutes
- Proposed logical test cases that covered important edge cases (no oranges, only rotten, impossible case)
- Showed good problem decomposition by accepting the incremental TDD approach

**Areas for Improvement:**

- Initial pattern checkpoint answer was incomplete regarding state variables — mentioned "track minimum minutes" but missed the need to track freshCount and queue state
- Didn't initially understand the invariant concept; needed clarification on what it means for level-by-level processing to maintain correctness
- Required Level 2 hints to understand the level-tracking pattern (snapshotting `levelSize` before processing)

**Help Needed:** Moderate — needed Level 2 pattern hints for bounds checking and level-by-level BFS, but applied them correctly once explained

---

## Coding

Score: 4/5

**Strengths:**

- Wrote clean, readable nested loops for grid traversal (lines 8-16 in final solution)
- Good variable naming throughout (`freshCount`, `levelSize`, `row`, `col`)
- Correctly implemented all four directional checks with proper bounds validation after guidance
- Successfully marked oranges as rotten in the grid (`grid[newRow][newCol] = 2`) to prevent duplicate processing
- Final code is well-structured with clear comments explaining BFS logic

**Areas for Improvement:**

- Needed multiple attempts to get bounds checking right — initially checked current `row`/`col` instead of the new positions being accessed (`row + 1`, `col - 1`, etc.)
- Made a typo in cycle 3 (line 26: `queue.push([row + 1, col])` when checking `row - 1`), though this was fixed in subsequent iteration
- Forgot to count fresh oranges initially in cycle 3, only adding the counting loop after cycle 4 test failure

**Debugging Process:**

- Systematic debugging when tests failed — responded well to guided questions about what values variables could have
- Quickly identified the freshCount initialization bug in cycle 4 after being asked "what should freshCount count?"
- Fixed the bug independently once the issue was clarified (counting rotten oranges vs fresh oranges)

---

## Verification

Score: 3/5

**Strengths:**

- Good test case selection — proposed edge cases like "no oranges" and "impossible to rot all" without prompting
- Understood the importance of testing the -1 return case (impossible scenario)
- Accepted the TDD discipline of writing tests first

**Areas for Improvement:**

- Didn't proactively trace through examples before coding — would have caught the freshCount initialization issue earlier
- Didn't mention verifying the invariant (that each BFS level represents exactly one minute) during implementation
- Could have been more proactive about considering what state needs to be tracked before writing code

---

## Communication

Score: 4/5

**Strengths:**

- Asked clarifying questions when confused ("I don't understand what deltaRow and deltaCol are") rather than blindly copying code
- Clearly stated when ready to proceed ("continue") vs when stuck
- Pattern checkpoint response showed good high-level thinking ("BFS because we're looking for shortest path")
- Explained the fix clearly in cycle 4 ("removed freshCount from the if condition for cell being 2, added another if for cell 1")

**Areas for Improvement:**

- Pattern checkpoint could have been more detailed regarding state variables and invariants
- Could have articulated _why_ level-by-level processing is needed more explicitly (to ensure each level = 1 minute)
- Silent during most coding — could have verbalized more of the implementation thought process

---

## Complexity Analysis

Score: 3/5

**Strengths:**

- Understood that BFS is an O(n) traversal pattern conceptually
- Recognized that visiting every cell is necessary for completeness

**Areas for Improvement:**

- Did not explicitly state time complexity as O(m × n) where m = rows, n = columns
- Did not mention space complexity (O(m × n) worst case for the queue when all cells are rotten initially)
- Could not explain _why_ the level-by-level approach doesn't change the overall O(m × n) complexity

---

## Pattern Recognition

- **Pattern Used:** Multi-Source Breadth-First Search (BFS)
- **Key Insight:** The "aha moment" was understanding that BFS processes nodes level-by-level, and each level represents one minute of elapsed time. By snapshotting the queue size before processing, we ensure all oranges at distance D rot before any at distance D+1, guaranteeing the minimum time.
- **Pattern Checkpoint Results:** 1/1 correct on first attempt (identified BFS), but needed follow-up clarification on state variables and invariants
- **Related Problems to Practice:**
  - **[286 - Walls and Gates](https://leetcode.com/problems/walls-and-gates/)** — Multi-source BFS from gates to fill distances; reinforces the same "start from all sources" pattern
  - **[1091 - Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)** — Single-source BFS with 8-directional movement; practices bounds checking and level tracking
  - **[542 - 01 Matrix](https://leetcode.com/problems/01-matrix/)** — Multi-source BFS to find nearest 0 for each cell; same pattern, different domain

---

## Session Progression

The candidate showed steady improvement throughout the session. Cycle 1 established basic grid traversal skills. Cycles 2-3 required significant coaching on BFS mechanics (bounds checking, level tracking), but once the pattern was explained, the candidate implemented it correctly. Cycle 4 demonstrated good debugging ability when catching the freshCount initialization bug independently after guided questioning.

| Cycle | What Was Tested                           | Test Ownership Level | Hint Level | Pattern Checkpoint | Notes                                                               |
| ----- | ----------------------------------------- | -------------------- | ---------- | ------------------ | ------------------------------------------------------------------- |
| 1     | No oranges at all → return 0              | L1                   | 1          | PASS               | Needed hints on variable initialization (started at 1 instead of 0) |
| 2     | Only rotten oranges → return 0            | L1                   | 0          | N/A                | Test passed immediately (existing code handled it)                  |
| 3     | Basic rotting scenario → return 4         | L2                   | 2          | PASS (w/ followup) | Needed L2 hints for bounds checking and level-by-level BFS pattern  |
| 4     | Impossible case (unreachable) → return -1 | L2                   | 1          | N/A                | Debugging cycle — identified freshCount bug after guided questions  |

---

## No-Hire Trigger Check

- **Critical Triggers Observed:** none
- **Recovery Evidence:** none needed
- **Guardrail Applied:** none

**Trigger Analysis:**

- **Core invariant explanation:** Candidate understood level-by-level invariant after explanation (no trigger)
- **Level 3 hints for core logic:** Only needed Level 2 hints, not Level 3 (no trigger)
- **Final complexity explanation:** Did not provide detailed complexity analysis, but understood O(n) traversal concept (borderline but not critical)
- **Solution correctness justification:** Could explain why BFS guarantees minimum time after coaching (no trigger)
- **Repeated failing assertions:** Fixed issues within 1-2 attempts after hints (no trigger)
- **Unresolved bugs at end:** All tests passing, no unresolved issues (no trigger)

---

## Overall Assessment

**Interview Recommendation:** Lean Recommend
**Hiring Decision:** Lean Hire
**Would Move Forward to Next Round:** Yes
**Confidence:** Medium

**Summary:**

I would move this candidate forward with a lean hire recommendation. They demonstrated solid algorithmic intuition by correctly identifying BFS as the pattern, and successfully implemented the solution after receiving moderate coaching. The candidate's debugging skills were good — they systematically worked through issues and fixed the freshCount initialization bug independently after guided questioning. However, they required Level 2 hints for bounds checking and level-tracking patterns, which suggests they would benefit from more practice translating conceptual understanding into code. Their communication was generally clear, though they could verbalize their thought process more during implementation. Overall, this is a capable mid-level engineer who would likely succeed with continued mentorship.

**Strengths to Build On:**

- Pattern recognition skills — correctly identified BFS early in the session
- Debugging mindset — asked clarifying questions and fixed bugs systematically
- Clean code style with good variable naming and structure

**Priority Areas for Growth:**

- Practice translating BFS patterns to code without Level 2 hints (bounds checking, level tracking)
- Articulate complexity analysis more explicitly (state Big O for both time and space)
- Verbalize implementation thought process more during coding (helps catch issues early)

**Recommended Next Steps:**

- **Practice similar multi-source BFS problems:** Walls and Gates (#286), 01 Matrix (#542) — build muscle memory for the level-tracking pattern
- **Study the bounds-checking pattern:** Always check the NEW position (`row + 1`, `col - 1`) before accessing it, not the current position
- **Before coding, trace through a small example:** This helps verify state variables and invariants upfront, catching issues like the freshCount initialization bug earlier

---
