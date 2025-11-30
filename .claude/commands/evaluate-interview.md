# Evaluate Interview Command

Evaluate a completed interview transcript and generate a rubric.

## Usage

Provide an interview transcript (from `interviews/transcript-*.txt`) to generate an evaluation rubric.

## Instructions

1. Read the provided transcript carefully
2. Ask for any missing context:
   - Candidate name (if not clear from transcript)
   - Interview type (coding/systems/behavioral)
   - Any additional context about the interview
3. Generate a completed rubric based on observations

## Evaluation Criteria

### For Coding Interviews

**Problem Solving (1-5)**
- Algorithm discovery and optimization approach
- Amount of guidance needed
- Discussion of time/space complexity tradeoffs
- Appropriate data structure selection

**Coding (1-5)**
- Translation of ideas into correct code
- Code organization and complexity
- Naming conventions and style
- Software engineering principles

**Verification (1-5)**
- Quality of clarifying questions
- Edge case consideration
- Testing methodology
- Bug identification and fixing

**Communication (1-5)**
- Technical explanation clarity
- Responsiveness to questions
- Openness to feedback
- Articulation of thought process

### For Systems Design Interviews

**Technical Breadth (1-5)**
- Knowledge of distributed systems concepts
- Understanding of trade-offs
- Familiarity with common patterns

**Problem Decomposition (1-5)**
- Requirements gathering
- Breaking down complex problems
- Making reasonable assumptions

**Scalability Thinking (1-5)**
- Handling growth scenarios
- Identifying bottlenecks
- Reliability considerations

### For Behavioral Interviews

**Communication (1-5)**
- Clarity and structure of responses
- Use of STAR method
- Conciseness vs completeness

**Self-Awareness (1-5)**
- Recognition of strengths and weaknesses
- Growth mindset demonstration
- Learning from failures

**Collaboration (1-5)**
- Team-oriented examples
- Conflict resolution approach
- Leadership potential

## Overall Recommendation

Provide one of:
- **Strong Hire** - Exceptional performance across all areas
- **Hire** - Solid performance, meets expectations
- **Lean Hire** - Generally positive with some concerns
- **Lean No Hire** - Below expectations in key areas
- **No Hire** - Significant concerns

## Output

Generate rubric file: `interviews/interview-rubric-YYYY-MM-DD-{candidate}-{type}.md`

Use the `INTERVIEW_RUBRIC_TEMPLATE.md` as the structure for the output.
