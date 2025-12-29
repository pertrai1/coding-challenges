# Claude Hooks - Platform-Specific Review

This directory contains Claude Code hooks that automatically provide platform-specific guidance when working on coding challenges.

## Installed Hooks

### Platform-Specific Review Hook

**File:** `platform-specific-review.sh`
**Type:** UserPromptSubmit
**Purpose:** Automatically detects whether you're working on LeetCode or GreatFrontEnd problems and provides platform-specific review guidelines.

#### How It Works

The hook triggers when you submit a prompt containing review-related keywords. It:

1. **Checks for review keywords** in your prompt:
   - "review"
   - "check"
   - "analyze"
   - "evaluate"
   - "assess"
2. Analyzes your prompt for platform keywords (leetcode, greatfrontend, gfe)
3. Checks git changed files for platform indicators
4. Examines your current working directory path
5. Provides platform-specific review guidelines based on detection

**Example prompts that trigger the hook:**
- "Please do a code review"
- "Can you review this solution?"
- "Check my implementation"
- "Analyze this algorithm"

#### Platform Detection

**LeetCode:** Detected when prompt/path contains:
- "leetcode"
- "/leetcode/" in file paths
- Current directory is under `leetcode/`

**GreatFrontEnd:** Detected when prompt/path contains:
- "greatfrontend"
- "/greatfrontend/" in file paths
- "gfe"
- Current directory is under `greatfrontend/`

#### Review Focus

**LeetCode:**
- Algorithm correctness
- Time & space complexity
- DSA pattern recognition
- Key insights
- Related problems
- Common mistakes

**GreatFrontEnd:**
- Browser & JavaScript APIs
- Frontend performance
- API design
- Code organization
- Testing considerations
- JavaScript best practices

## Configuration

The hook is configured in `.claude/settings.json`:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/platform-specific-review.sh"
          }
        ]
      }
    ]
  }
}
```

## Testing

Test the hook manually:

```bash
# Test LeetCode detection
echo '{"prompt":"Review my LeetCode solution","cwd":"'$(pwd)'/leetcode/easy/two-sum"}' | .claude/hooks/platform-specific-review.sh

# Test GreatFrontEnd detection
echo '{"prompt":"Help with GreatFrontEnd debounce","cwd":"'$(pwd)'/greatfrontend/gfe-75"}' | .claude/hooks/platform-specific-review.sh
```

## Managing Hooks

View all configured hooks:
```bash
/hooks
```

Disable this hook: Remove or comment out the hook configuration in `.claude/settings.json`

## See Also

- [Claude Code Hooks Documentation](https://docs.anthropic.com/claude/docs/claude-code-hooks)
- Project Guidelines: `/CLAUDE.md`
