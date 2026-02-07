---
name: tdd-pair-loop
description: TDD pair programming loop methodology. Defines the red-green-refactor cycle, agent coordination protocol, HANDOFF schema, and state management for the Driver (test writer), Navigator (code writer), and Researcher (read-only context) agents.
---

# TDD Pair Programming Loop

This skill defines the methodology for running a strict TDD pair programming session with three coordinating agents: Driver, Navigator, and Researcher.

## Core Principle

**Red → Green → Refactor**, one test at a time, with strict role boundaries.

- The Driver writes ONE failing test (RED)
- The Navigator writes MINIMAL code to pass it (GREEN)
- The Navigator optionally refactors (REFACTOR, tests stay GREEN)
- Repeat until the problem is fully solved

## Agent Roles and Boundaries

| Agent      | Writes                    | Cannot Touch         | Runs Tests               |
| ---------- | ------------------------- | -------------------- | ------------------------ |
| Driver     | `*.test.ts` only          | Implementation files | Yes — must confirm RED   |
| Navigator  | Implementation files only | Test files           | Yes — must confirm GREEN |
| Researcher | Nothing                   | All files            | No                       |

These boundaries are absolute. No exceptions.

## The TDD Cycle (Step by Step)

### Phase 1: SETUP (Orchestrator Only)

1. Select or receive a LeetCode problem
2. Determine difficulty level and create directory: `leetcode/{difficulty}/{number}-{name}/`
3. Create `README.md` with problem statement from LeetCode using **pure markdown** (no HTML elements — see Markdown Standards below)
4. Create empty implementation file: `{name}.ts` with a stub export
5. Create empty test file: `{name}.test.ts` with describe block and import
6. Create a git branch: `tdd/{number}-{name}`

#### Stub Implementation File

```typescript
// {name}.ts
export function functionName() {
  // TODO: implement via TDD
  throw new Error('Not implemented');
}
```

#### Stub Test File

```typescript
// {name}.test.ts
import { describe, it, expect } from 'vitest';
import { functionName } from './{name}';

describe('{Problem Name}', () => {
  // Tests will be added one at a time by the Driver
});
```

### Phase 2: TDD LOOP (Repeat)

#### Step A — Driver (RED)

1. Driver reads the problem statement and any previous HANDOFF context
2. Driver writes exactly ONE new `it()` block in the test file
3. Driver runs: `npx vitest run {test-file} --reporter=verbose`
4. Driver confirms the new test FAILS (RED)
5. Driver outputs a HANDOFF block

#### Step B — Researcher (OPTIONAL)

Only triggered if the Driver or Navigator includes `RESEARCH:` in their HANDOFF.

1. Researcher reads the question
2. Researcher looks up: techniques, patterns, existing repo examples, docs
3. Researcher returns concise findings
4. Orchestrator passes findings to the next agent (Navigator or Driver)

#### Step C — Navigator (GREEN + optional REFACTOR)

1. Navigator reads the Driver's HANDOFF (and Researcher findings if any)
2. Navigator writes the MINIMAL code change to make the failing test pass
3. Navigator runs: `npx vitest run {test-file} --reporter=verbose`
4. Navigator confirms ALL tests PASS (GREEN)
5. (Optional) Navigator refactors, then runs tests again to confirm still GREEN
6. Navigator outputs a HANDOFF block

#### Step D — Loop Decision

- If more behaviors need testing → go to Step A (Driver writes next test)
- If all acceptance criteria are met → proceed to Phase 3

### Phase 3: POST-MORTEM

1. Copy `POST_MORTEM_TEMPLATE.md` to the problem directory as `POST_MORTEM.md`
2. An expert reviewer agent fills out the post-mortem using the `review-solution` skill:
   - Problem description in own words
   - Solution exploration: approaches considered, final analysis
   - Time and space complexity with explanation
   - Pattern recognition and key insight
   - Related problems (2-3 similar ones)
   - Edge cases handled and missed
   - Retrospective and key takeaways
   - Self-rating rubric
3. Run quality checks:
   - `npx eslint {impl-file}` — fix any issues
   - `npx prettier --write {impl-file} {test-file}` — format code
   - `npx markdownlint leetcode/{difficulty}/{number}-{name}/README.md` — fix any violations
   - `npx markdownlint leetcode/{difficulty}/{number}-{name}/POST_MORTEM.md` — fix any violations
   - `npx vitest run {test-file}` — final confirmation all tests pass

### Phase 4: UPDATE ROOT README

Update the root `README.md`:

1. Increment the LeetCode "Problems Solved" count in the Overview table
2. Increment the difficulty-specific count in the appropriate `<summary>` tag (e.g., "Easy Problems (N solved)")
3. Add the problem link in the correct difficulty section and category subsection
4. If the problem matches a pattern in "Problems by Pattern", add it there too
5. Run `npx markdownlint README.md` — fix any violations

### Phase 5: PULL REQUEST

1. Stage all changed files: `git add leetcode/{difficulty}/{number}-{name}/ README.md`
2. Commit with message: `feat: solve {Problem Name} (#{number}) via TDD`
3. Push branch: `git push -u origin tdd/{number}-{name}`
4. Create PR:

   ```bash
   gh pr create \
     --title "feat: solve {Problem Name} (#{number})" \
     --body "## Problem\n{link}\n\n## Approach\n{summary from post-mortem}\n\n## Complexity\n- Time: O(...)\n- Space: O(...)\n\n## TDD Cycles\n{number of red-green cycles completed}" \
     --label "code challenge"
   ```

5. PR is assigned to the user for review

## HANDOFF Schema

Every Driver and Navigator output MUST include a HANDOFF block. This is the contract that makes agent coordination work.

### Driver HANDOFF (RED phase)

```markdown
## HANDOFF

- **Phase**: RED
- **Cycle**: {number}
- **Test file**: {path}
- **New test**: {test name}
- **What behavior is specified**: {one sentence}
- **Test output**: {vitest FAIL output}
- **Next step**: {what Navigator should implement | DONE}
- **Research needed**: {question | none}
```

### Navigator HANDOFF (GREEN/REFACTOR phase)

```markdown
## HANDOFF

- **Phase**: GREEN | REFACTOR
- **Cycle**: {number}
- **Implementation file**: {path}
- **What was implemented**: {one sentence}
- **Approach**: {algorithm/technique}
- **Test output**: {vitest PASS output}
- **All tests passing**: YES | NO
- **Refactored**: YES | NO — {what changed}
- **Next step**: {ready for next test | DONE}
- **Research needed**: {question | none}
```

## Completion Criteria

The TDD loop is DONE when:

1. All examples from the problem statement have corresponding tests
2. Key edge cases are covered (empty input, single element, boundaries)
3. All tests pass
4. The solution is correct and handles the problem's constraints
5. At least 4-5 meaningful test cycles have been completed

## Conventions

### File Naming

- Directory: `{4-digit-number}-{kebab-case-name}` (e.g., `0001-two-sum`)
- Implementation: `{kebab-case-name}.ts` (e.g., `two-sum.ts`)
- Test: `{kebab-case-name}.test.ts` (e.g., `two-sum.test.ts`)
- README: `README.md`
- Post-mortem: `POST_MORTEM.md`

### Branch Naming

- `tdd/{4-digit-number}-{kebab-case-name}` (e.g., `tdd/0015-3sum`)

### Commit Message

- `feat: solve {Problem Name} (#{number}) via TDD`

### Test Command

- `npx vitest run {test-file} --reporter=verbose`
- Never use watch mode during TDD cycles (use single-run mode)

### Markdown Standards

All `.md` files created during TDD must use **pure markdown formatting**:

- **No HTML elements**: Do not use `<p>`, `<code>`, `<strong>`, `<em>`, `<pre>`, `<ul>`, `<li>`, `<ol>`
- **Allowed HTML** (per `.markdownlint.json`): `<details>`, `<summary>`, `<sup>`, `<sub>`, `<br>`, `<img>`
- **Convert LeetCode HTML to markdown**:
  - `<strong>text</strong>` → `**text**`
  - `<em>text</em>` → `*text*`
  - `<code>text</code>` → `` `text` ``
  - `<pre>...</pre>` → fenced code blocks (```)
  - `<ul><li>` → markdown lists (`-`)
  - `<p>` → blank lines between paragraphs
  - `<sup>N</sup>` → `^N` or use `<sup>N</sup>` (allowed)
- **Validation**: Run `npx markdownlint {file}` on every markdown file before committing
- **Auto-fix**: Use `npx markdownlint --fix {file}` for auto-fixable violations
