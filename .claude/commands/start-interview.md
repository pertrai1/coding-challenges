# Start Interview Command

Machine-friendly entrypoint for orchestrated interviews.

## Usage

Run the Python orchestrator script to start an interview session:

```bash
python scripts/start_interview.py [mode] [options]
```

## Modes

- `coding` - Coding/algorithm interview (default)
- `systems` - Systems design interview
- `behavioral` - Behavioral interview
- `full` - Run all interview types sequentially

## Options

- `--candidate NAME` - Candidate name for transcript files
- `--auto-eval` - Enable auto-evaluation (disabled by default)

## Examples

```bash
# Start a coding interview (default)
python scripts/start_interview.py

# Start a systems design interview
python scripts/start_interview.py systems

# Run full interview loop with candidate name
python scripts/start_interview.py full --candidate john-doe

# Enable auto-evaluation
python scripts/start_interview.py coding --auto-eval
```

## Output

- Transcripts saved to: `interviews/transcript-YYYY-MM-DD-{candidate}-{type}.txt`
- Rubrics (if auto-eval enabled): `interviews/interview-rubric-YYYY-MM-DD-{candidate}-{type}.md`

## Agent Prompts

The orchestrator uses agent prompts from `.claude/agents/`:
- `coding-interview.md` - Coding interview agent
- `systems-interview.md` - Systems design interview agent
- `behavioral-interview.md` - Behavioral interview agent

## Note

Auto-evaluation is disabled by default. Use `--auto-eval` flag to generate rubrics automatically after interviews.
