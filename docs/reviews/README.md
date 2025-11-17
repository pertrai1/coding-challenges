# Spaced Repetition Review System

This directory contains the automated spaced repetition system for LeetCode problems.

## How It Works

When you solve a LeetCode problem and merge a PR, the system automatically schedules review sessions based on spaced repetition intervals:

- **Day 1**: First review (1 day after solving)
- **Day 3**: Second review (3 days after solving)
- **Day 7**: Third review (1 week after solving)
- **Day 14**: Fourth review (2 weeks after solving)
- **Day 30**: Fifth review (1 month after solving)

## Review Process

1. **Automatic Scheduling**: When a PR is merged, the problem is added to `review-schedule.json`
2. **Daily Check**: A scheduled workflow runs daily to check for due reviews
3. **GitHub Issues**: Review issues are automatically created with:
   - Link to original solution
   - Problem description and link
   - Review number (1st, 2nd, 3rd, etc.)
   - Labels: `review-needed`, difficulty level, pattern tags

## Files

- `review-schedule.json`: Master schedule of all problems and their review dates

## Review Completion

When you complete a review:

1. Solve the problem again (or review your solution)
2. Comment on the review issue with your findings
3. Close the issue to mark it as completed

## Benefits

- **Long-term Retention**: Spaced repetition is scientifically proven to improve memory
- **Pattern Recognition**: Reviewing problems helps identify common patterns
- **Confidence Building**: Seeing progress over time builds confidence
- **Active Recall**: Solving again reinforces understanding better than passive review
