# AI-Assisted Technical Interview Workflow

This document describes how to conduct technical interviews using Claude's audio capabilities and automatically generate interview rubrics.

## Overview

This workflow allows you to:
1. Conduct technical interviews using either audio (Claude.ai) or text (Claude Code CLI)
2. Automatically evaluate the interview and generate a completed rubric
3. Store interview evaluations for review and comparison

## Two Methods Available

### Method A: Text-Based Interview (Fully Automated)
- Conduct interview in Claude Code CLI using `/start-interview`
- No transcript copying needed - automatic evaluation
- Best for practice and self-interviews

### Method B: Audio Interview (Manual Transcript)
- Conduct interview on Claude.ai with audio
- Copy transcript and evaluate with `/evaluate-interview`
- Best for realistic interview simulation

## Prerequisites

- This repository cloned locally
- Claude Code CLI installed
- (Optional) Access to Claude.ai for audio interviews

---

## Method A: Text-Based Interview (Recommended for Practice)

### 1. Start the Interview

**In Claude Code CLI:**

```bash
/start-interview
```

You'll be asked:
- What difficulty? (Easy/Medium/Hard)
- What category? (Arrays, Strings, Trees, etc., or "random")
- Time limit? (typically 30-45 minutes)

### 2. Complete the Interview

Claude will:
- Select a problem from your `leetcode/` directory
- Present the problem clearly
- Guide you through the solution process
- Provide hints if you get stuck
- Observe your problem-solving approach

You should:
- Think out loud
- Ask clarifying questions
- Discuss your approach before coding
- Write your solution (in chat or create a file)
- Test your code and consider edge cases

### 3. Automatic Evaluation

When you're done, Claude will:
- Automatically review the entire conversation
- Generate a completed rubric with scores (1-5)
- Save it to `interviews/interview-rubric-YYYY-MM-DD-{name}.md`
- Provide specific feedback based on observations

**No transcript copying needed - it's all automatic!**

---

## Method B: Audio Interview (Realistic Simulation)

### 1. Conduct the Interview (Claude.ai)

**On Claude.ai (web/mobile):**

1. Start a new chat session
2. Enable audio/voice mode
3. Begin the interview with a prompt like:
   ```
   You are a technical interviewer. Please give me a medium-difficulty
   LeetCode-style problem and conduct a 45-minute technical interview.
   Ask me to solve it, guide me when needed, and evaluate my performance.
   ```
4. Conduct the interview via audio
5. Code solutions in your local editor or online IDE as discussed
6. When finished, ask Claude to provide a **complete text transcript** of the conversation

### 2. Save the Transcript

1. Copy the full transcript from Claude.ai
2. Save it locally as a text file (e.g., `transcript-2025-01-15.txt`)

### 3. Generate the Rubric (Claude Code CLI)

**In your terminal:**

```bash
# Navigate to the coding-challenges repository
cd /path/to/coding-challenges

# Run the evaluation command
/evaluate-interview
```

Then paste or provide the transcript when prompted.

Claude will:
- Analyze the transcript
- Ask for candidate name and any additional context
- Generate a completed rubric file in `interviews/interview-rubric-YYYY-MM-DD-candidate-name.md`

### 4. Review the Rubric

The generated rubric will include:
- Scores (1-5) for each category
- Detailed justification with specific examples
- Overall recommendation

Review and adjust if needed.

## Directory Structure

```
coding-challenges/
├── interviews/                          # Interview rubrics stored here
│   ├── interview-rubric-2025-01-15-john-doe.md
│   └── interview-rubric-2025-01-16-jane-smith.md
├── leetcode/                            # LeetCode problems by difficulty
│   ├── easy/
│   ├── medium/
│   └── hard/
├── INTERVIEW_RUBRIC_TEMPLATE.md         # Template structure
├── INTERVIEW_WORKFLOW.md                # This file
└── .claude/
    └── commands/
        ├── start-interview.md           # Automated interview command
        └── evaluate-interview.md        # Manual evaluation command
```

## Tips for Better Interviews

### For the Interviewer (Claude on Claude.ai)

Ask Claude to:
- Start with a clear problem statement
- Provide hints progressively if stuck
- Ask about time/space complexity
- Probe understanding with follow-up questions
- Note observations about communication style

### For the Candidate (You)

- Think out loud throughout the process
- Ask clarifying questions
- Discuss your approach before coding
- Consider edge cases
- Test your solution
- Discuss tradeoffs

### For Better Transcripts

At the end of the interview session, ask:
```
Please provide a complete text transcript of our entire conversation,
including all problem descriptions, my solutions, your hints, and
our discussions about complexity and edge cases.
```

## Customization

### Modify the Rubric Template

Edit `INTERVIEW_RUBRIC_TEMPLATE.md` to change:
- Scoring criteria
- Evaluation categories
- Score scale (currently 1-5)

### Modify the Evaluation Prompt

Edit `.claude/commands/evaluate-interview.md` to change:
- How the transcript is analyzed
- What questions are asked
- Output format

## Future Enhancements

Potential improvements:
- Direct audio support in Claude Code CLI (when available)
- Automatic transcript capture
- Statistical analysis across multiple interviews
- Integration with calendar/scheduling
- Video recording synchronization

## Troubleshooting

**Issue: `/start-interview` command not found**
- Ensure you're in the repository directory
- Check that `.claude/commands/start-interview.md` exists
- Restart Claude Code CLI

**Issue: Audio not working on Claude.ai**
- Ensure you're using the web app or mobile app (not API)
- Check browser permissions for microphone
- Try a different browser (Chrome/Edge work best)

**Issue: Transcript is incomplete**
- Ask Claude to regenerate with more detail
- If conversation was very long, it may be truncated
- Consider breaking very long interviews into segments

**Issue: `/evaluate-interview` command not found**
- Ensure you're in the repository directory
- Check that `.claude/commands/evaluate-interview.md` exists
- Restart Claude Code CLI

**Issue: No problems found in leetcode/ directory**
- Ensure you have README.md files in problem directories
- Check the directory structure matches: `leetcode/{difficulty}/{problem-name}/`

## Examples

See the `interviews/` directory for example completed rubrics.
