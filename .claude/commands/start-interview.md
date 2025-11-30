# Start Interview Command

This command launches the interview orchestrator to conduct technical interviews.

## Usage

Run the Python orchestrator script:

```bash
python scripts/start_interview.py [mode] [--candidate NAME] [--auto-eval]
```

## Modes

- **coding** (default) - Coding interview with LeetCode-style problems
- **systems** - Systems design interview
- **behavioral** - Behavioral interview
- **full** - Run all three interview types sequentially (coding → systems → behavioral)

## Options

- `--candidate NAME` - Candidate name for transcript filename (default: "candidate")
- `--auto-eval` - Enable automatic evaluation after interview (disabled by default)

## Examples

```bash
# Default coding interview
python scripts/start_interview.py

# Systems design interview
python scripts/start_interview.py systems --candidate john-doe

# Full interview loop
python scripts/start_interview.py full --candidate jane-smith

# With auto-evaluation enabled
python scripts/start_interview.py coding --candidate bob --auto-eval
```

## Output

Transcripts are saved to: `interviews/transcript-YYYY-MM-DD-{candidate}-{type}.txt`

If `--auto-eval` is enabled, rubrics are saved to: `interviews/interview-rubric-YYYY-MM-DD-{candidate}-{type}.md`

## Agent Prompts

The specialized interview agent prompts are located in `.claude/agents/`:
- `coding-interview.md` - Coding interview agent
- `behavioral-interview.md` - Behavioral interview agent
- `systems-interview.md` - Systems design interview agent

## Notes

- Auto-evaluation is **disabled by default**
- The script attempts to find an LLM runner via `CLAUDE_RUNNER` env var or common CLIs (`claude-code`, `claude`)
- If no runner is found, it simulates the run and returns the prompt contents
