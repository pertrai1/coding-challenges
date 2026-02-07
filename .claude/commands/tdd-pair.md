# TDD Pair Programming Session

You are the orchestrator for a TDD pair programming session. You coordinate three agents — Driver (test writer), Navigator (code writer), and Researcher (read-only context) — to solve a LeetCode problem using strict Test-Driven Development.

Follow the `tdd-pair-loop` skill methodology exactly. The agents are defined in `.claude/agents/tdd-driver.md`, `.claude/agents/tdd-navigator.md`, and `.claude/agents/tdd-researcher.md`.

## Session Flow

Execute these phases in order. Do not skip any phase.

### Phase 1: Problem Selection & Setup

1. **Select a problem.** If the user provided a specific problem, use that. Otherwise:
   - Ask the user for difficulty preference (easy / medium / hard / random) and category preference (Arrays, Strings, Trees, Graphs, DP, or random)
   - Search the web for a LeetCode problem matching the criteria
   - Cross-reference against existing directories in `leetcode/` to confirm it's not already solved
   - If the problem is already solved, pick another one
   - Present the problem to the user and get confirmation before proceeding

2. **Read the problem statement.** Get the full problem description, examples, and constraints from LeetCode.

3. **Create the problem directory and files:**
   - Determine the difficulty folder: `leetcode/easy/`, `leetcode/medium/`, or `leetcode/hard/`
   - Create the directory: `leetcode/{difficulty}/{4-digit-number}-{kebab-case-name}/`
   - Create `README.md` with the problem statement using **pure markdown formatting** (no HTML elements). Convert the LeetCode HTML to markdown:
     - Use `#` headings instead of `<p><strong>`
     - Use `**bold**` instead of `<strong>`, `*italic*` instead of `<em>`
     - Use `` `backticks` `` instead of `<code>`
     - Use markdown code blocks (```) instead of `<pre>`
     - Use markdown lists (`-`) instead of `<ul><li>`
     - Use `^` for superscripts where needed (e.g., `10^4` instead of `<sup>4</sup>`)
     - Format: title with LeetCode link, difficulty badge, markdown problem description, examples, constraints
     - Run `npx markdownlint {README-file}` to verify — fix any violations before proceeding
   - Create the implementation file `{name}.ts` with a stub export:

     ```typescript
     export function functionName(): void {
       throw new Error('Not implemented');
     }
     ```

   - Create the test file `{name}.test.ts` with a stub describe block:

     ```typescript
     import { describe, it, expect } from 'vitest';
     import { functionName } from './{name}';

     describe('{Problem Name}', () => {
       // Tests will be added one at a time by the Driver
     });
     ```

4. **Create a git branch:** `tdd/{number}-{name}`
   - First ensure you're on `main` and it's clean
   - Create and checkout: `git checkout -b tdd/{number}-{name}`

### Phase 2: TDD Loop

Run the red-green-refactor cycle. Each cycle has these steps:

#### Step A: Driver Turn (RED)

Delegate to the Driver agent (use `delegate_task` with the `tdd-driver` agent definition or act as the Driver role):

- **Context to provide**: Problem statement, test file path, implementation file path, cycle number, and any previous HANDOFF from the Navigator
- **Expected output**: A HANDOFF block with Phase=RED, the new test, and vitest FAIL output
- **Verify**: The HANDOFF includes actual test failure output. If not, re-run the test.

#### Step B: Researcher Turn (CONDITIONAL)

Only if the Driver's HANDOFF contains `Research needed:` with a value other than "none":

- Delegate to the Researcher agent
- **Context to provide**: The research question, problem statement, and relevant paths
- **Expected output**: Concise research findings
- Pass the findings to the Navigator in the next step

#### Step C: Navigator Turn (GREEN)

Delegate to the Navigator agent (use `delegate_task` with the `tdd-navigator` agent definition or act as the Navigator role):

- **Context to provide**: Driver's HANDOFF, implementation file path, test file path, researcher findings (if any), and cycle number
- **Expected output**: A HANDOFF block with Phase=GREEN, the implementation change, and vitest PASS output
- **Verify**: ALL tests pass. If any test fails, send the Navigator back to fix it before proceeding.
- **Commit**: Immediately commit the progress to enable "TDD Playback" in the PR:

  ```bash
  git add .
  git commit -m "test: cycle {cycle_number} (Green)"
  ```

#### Step D: Loop Decision

Check Navigator's HANDOFF:

- If `Next step` says "ready for next test" → go to Step A with the next cycle number
- If `Next step` says "DONE" → check completion criteria below
- If Driver signals `DONE` in their next turn → proceed to Phase 3

**Completion criteria** (ALL must be true):

- All example cases from the problem have tests
- At least 2-3 edge cases are tested
- All tests pass
- At least 4 TDD cycles have been completed

If criteria aren't met, continue the loop.

### Phase 3: Post-Mortem

1. Copy `POST_MORTEM_TEMPLATE.md` to the problem directory as `POST_MORTEM.md`
2. Fill out the post-mortem as an expert algorithm reviewer. Use the `review-solution` skill methodology:
   - **Problem**: Describe in your own words, include problem name and LeetCode link
   - **Time Tracking**: Estimate based on the number of TDD cycles
   - **Solution Exploration**: All approaches considered (including early naive implementations from TDD), final complexity analysis, trade-offs
   - **Pattern Recognition**: Algorithmic pattern, key insight ("aha moment"), 2-3 related problems
   - **Edge Cases**: What was handled, what was missed
   - **Retrospective**: Key takeaways from the TDD process
   - **Rubric**: Self-rate the solution (1-5 scale)
3. Run quality checks on all files in the problem directory:
   - `npx eslint {implementation-file}` — fix any issues
   - `npx prettier --write {implementation-file} {test-file}` — format code
   - `npx markdownlint leetcode/{difficulty}/{number}-{name}/README.md` — verify markdown quality, fix any violations
   - `npx markdownlint leetcode/{difficulty}/{number}-{name}/POST_MORTEM.md` — verify markdown quality, fix any violations
   - `npx vitest run {test-file}` — final confirmation all tests pass

### Phase 4: Update Root README

Update the root `README.md` to reflect the new problem:

1. **Increment the problem count** in the Overview table (line ~9):
   - Update the LeetCode "Problems Solved" number (currently the total of easy + medium + hard)

2. **Increment the difficulty count** in the appropriate collapsible section:
   - Easy: update `Easy Problems (N solved)` in the `<summary>` tag
   - Medium: update `Medium Problems (N solved)` in the `<summary>` tag
   - Hard: update `Hard Problems (N solved)` in the `<summary>` tag

3. **Add the problem link** to the correct difficulty section, in the appropriate category subsection:
   - Format: `- [{number} - {Problem Name}](./leetcode/{difficulty}/{number}-{name}) ![{Difficulty}](https://img.shields.io/badge/{Difficulty}-{color})`
   - Colors: Easy=green, Medium=orange, Hard=red
   - Place alphabetically or by problem number within the subsection
   - If no existing subsection fits, add it to the most relevant one or create a new subsection

4. **If the problem matches a pattern** listed in "Problems by Pattern", add it there too.

5. **Run markdownlint on the root README**: `npx markdownlint README.md` — fix any violations before proceeding.

### Phase 5: Pull Request

1. Stage all changed files:

   ```bash
   git add leetcode/{difficulty}/{number}-{name}/ README.md
   ```

2. Commit:

   ```bash
   git commit -m "feat: solve {Problem Name} (#{number}) via TDD"
   ```

3. Push:

   ```bash
   git push -u origin tdd/{number}-{name}
   ```

4. Create the pull request:

   ```bash
   gh pr create \
     --title "feat: solve {Problem Name} (#{number})" \
     --body "## Problem
   [{Problem Name}](https://leetcode.com/problems/{slug}/) — {Difficulty}

   ## Approach
   {Brief summary of the final algorithm from the post-mortem}

   ## Complexity
   - **Time**: O(...)
   - **Space**: O(...)

   ## Pattern
   {Algorithmic pattern used}

   ## TDD Summary
   - **Cycles**: {number of red-green cycles}
   - **Tests**: {number of test cases}
   - **Key Insight**: {the aha moment from the post-mortem}

   ## 🧠 Self-Review Questions
   1. {Question about key logic or trade-off}
   <details>
     <summary>Answer</summary>
     {Answer}
   </details>
   2. {Question about edge case or complexity}
   <details>
     <summary>Answer</summary>
     {Answer}
   </details>

   ## Files
   - \`README.md\` — Problem statement
   - \`{name}.ts\` — Solution
   - \`{name}.test.ts\` — Test suite
   - \`POST_MORTEM.md\` — Analysis and retrospective" \
     --label "code challenge"
   ```

5. **Add Educational Annotations (Agent-Annotated PR)**:
   - Act as the **DSA Code Reviewer** agent.
   - Analyze the final solution code in `{name}.ts`.
   - Identify 2-3 specific blocks of code that demonstrate the "Key Insight" or interesting patterns.
   - For each block, post a review comment on the PR (or a general comment if line-targeting is difficult):

     ```bash
     gh pr comment {PR_URL} --body "💡 **Educational Note**: {Explanation of why this code is written this way, complexity analysis, or pattern info}"
     ```

6. Report the PR URL to the user.

## Important Notes

- **Always run tests in single-run mode**: `npx vitest run` (never watch mode)
- **TypeScript**: All solution and test files use `.ts` extension
- **Imports**: Use named exports from implementation file, import in test file
- **Vitest globals**: The config has `globals: true`, but still import `describe`, `it`, `expect` explicitly for clarity
- **Existing conventions**: Match the naming pattern of existing problems (4-digit number, kebab-case)
- **No external dependencies**: Solutions must be self-contained (no lodash, etc.)
- **Markdown only**: All `.md` files must use pure markdown formatting — no HTML elements like `<p>`, `<code>`, `<strong>`, `<em>`, `<pre>`, `<ul>`, `<li>`. The markdownlint config (`.markdownlint.json`) allows only `<details>`, `<summary>`, `<sup>`, `<sub>`, `<br>`, `<img>`.
- **markdownlint**: Run `npx markdownlint {file}` on every markdown file created or modified. Fix violations before committing.
- **README updates**: The root `README.md` must be updated with the new problem count and link every time a new problem is solved.
