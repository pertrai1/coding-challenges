# Code Quality & Analysis System

A comprehensive automated code quality and analysis system for the coding challenges repository.

## 🎯 Overview

This system provides automated code quality checks, complexity analysis, and educational insights for algorithmic solutions. It's designed to help improve code quality while learning algorithms and data structures.

## 🔧 Components

### 1. **ESLint Configuration**

- **File**: `.eslintrc.json`
- **Purpose**: Code style and quality enforcement
- **Features**:
  - TypeScript and JavaScript support
  - Algorithm-specific rules
  - Complexity warnings for educational purposes
  - Relaxed rules for LeetCode solutions

### 2. **Prettier Formatting**

- **File**: `.prettierrc.yml`
- **Purpose**: Consistent code formatting
- **Features**:
  - Automatic code formatting
  - Git-friendly formatting rules
  - Special rules for algorithm files

### 3. **Complexity Analyzer**

- **File**: `scripts/complexity-analyzer.js`
- **Purpose**: Automated Big O complexity analysis
- **Features**:
  - Pattern-based complexity detection
  - Data structure usage analysis
  - Algorithmic pattern recognition
  - Educational recommendations

### 4. **Pre-commit Hooks**

- **File**: `.pre-commit-config.yaml`
- **Purpose**: Quality gates before commits
- **Features**:
  - Automatic linting and formatting
  - Complexity analysis on algorithm files
  - Security checks
  - File validation

### 5. **CI/CD Pipeline**

- **File**: `.github/workflows/code-quality.yml`
- **Purpose**: Automated quality checks in CI/CD
- **Features**:
  - Multi-stage quality analysis
  - PR comments with results
  - Quality reports and artifacts

## 🚀 Usage

### Daily Development Commands

```bash
# Quick quality check
npm run quality:check

# Fix common issues automatically
npm run quality:fix

# Comprehensive quality analysis
npm run quality:full

# Analyze algorithm complexity
npm run complexity:leetcode

# Individual tools
npm run lint
npm run format
npm run complexity
```

### One-time Setup

```bash
# Install dependencies
npm install

# Setup pre-commit hooks (optional)
npx husky install
npx pre-commit install
```

## 📊 Quality Gates

### ✅ **Passing Criteria**

- Zero ESLint errors
- Proper code formatting (Prettier)
- No high/critical security vulnerabilities
- Complexity analysis completed

### ⚠️ **Warning Criteria**

- ESLint warnings (allowed, but monitored)
- Complex algorithms (O(2ⁿ) flagged for review)
- High cyclomatic complexity (educational alerts)

### ❌ **Failing Criteria**

- ESLint errors present
- Code formatting violations
- Critical security vulnerabilities
- Analysis tools failing

## 🔍 Complexity Analysis Features

### Time Complexity Detection

- **O(1)**: Constant time operations
- **O(log n)**: Binary search, divide-and-conquer
- **O(n)**: Linear iteration patterns
- **O(n log n)**: Efficient sorting algorithms
- **O(n²)**: Nested loops, quadratic algorithms
- **O(2ⁿ)**: Recursive exponential patterns

### Space Complexity Analysis

- Memory usage patterns
- Recursive call stack analysis
- Data structure space requirements

### Pattern Recognition

- **Two Pointers**: Opposite-direction traversal
- **Sliding Window**: Subarray/substring problems
- **Binary Search**: Sorted data searching
- **Dynamic Programming**: Memoization patterns
- **Hash Maps**: Lookup optimization

### Data Structure Analysis

- Usage detection for Arrays, Maps, Sets
- Operation complexity for each structure
- Performance characteristics

## 📈 Reports & Metrics

### Quality Report (`quality-report.md`)

- Comprehensive quality summary
- Pass/fail status for each check
- Detailed metrics and recommendations
- Generated after each quality run

### Complexity Reports (`docs/analysis/`)

- Per-file complexity analysis
- Algorithm pattern documentation
- Educational insights and recommendations
- Historical complexity tracking

### CI/CD Artifacts

- ESLint JSON reports
- Complexity analysis summaries
- Security audit results
- Code metrics (lines, duplication, etc.)

## 🎓 Educational Features

### Algorithm Learning

- **Complexity Validation**: Verify your Big O claims
- **Pattern Recognition**: Identify which patterns you're using
- **Performance Insights**: Understand real-world performance
- **Optimization Suggestions**: Get recommendations for improvements

### Code Quality Learning

- **Best Practices**: Learn JavaScript/TypeScript conventions
- **Code Metrics**: Understand complexity measurements
- **Refactoring Hints**: Get suggestions for cleaner code
- **Security Awareness**: Learn about common vulnerabilities

## ⚙️ Configuration

### ESLint Rules (`.eslintrc.json`)

```json
{
  "rules": {
    "complexity": ["warn", 10],
    "max-depth": ["warn", 4],
    "max-lines-per-function": ["warn", 50]
  },
  "overrides": [
    {
      "files": ["leetcode/**/*.js"],
      "rules": {
        "complexity": ["warn", 15] // Relaxed for algorithms
      }
    }
  ]
}
```

### Prettier Options (`.prettierrc.yml`)

```yaml
printWidth: 80
tabWidth: 2
singleQuote: true
semi: true
trailingComma: 'none'
```

### Quality Thresholds

- **ESLint Errors**: 0 (must fix)
- **ESLint Warnings**: <20 (monitored)
- **Security Vulnerabilities**: 0 high/critical
- **Cyclomatic Complexity**: <15 (educational warning)

## 🔄 Workflow Integration

### Pre-commit (Local)

1. **Lint Check**: ESLint runs on staged files
2. **Format Check**: Prettier formats code
3. **Complexity Analysis**: Algorithms analyzed for patterns
4. **Security Check**: Detect secrets and vulnerabilities

### CI/CD Pipeline

Multiple GitHub Actions workflows maintain quality:

- **Code Quality** (`.github/workflows/code-quality.yml`): Runs ESLint, Prettier, and complexity analysis on PRs
- **Test** (`.github/workflows/test.yml`): Runs Vitest on all commits
- **Daily Learning** (`.github/workflows/daily-learning.yml`): Creates daily learning issues
- **LLM Learning** (`.github/workflows/daily-llm-learning.yml`): Creates LLM/agent research issues
- **PR Review** (multiple workflows): Automated code reviews using Claude, GPT-4, and Gemini

Pipeline stages:

1. **Quality Gate**: ESLint + Prettier validation
2. **Test Suite**: Vitest with coverage reporting
3. **Complexity Analysis**: Full repository analysis
4. **Security Scan**: NPM audit + secret detection
5. **Code Metrics**: Generate comprehensive metrics
6. **Report Generation**: Unified quality report

### Pull Request Integration

- **Automated Comments**: Quality results and AI reviews posted to PR
- **Artifact Storage**: Detailed reports saved
- **Quality Gates**: Prevent merging if critical issues
- **Trend Analysis**: Track quality over time
- **Multi-Agent Reviews**: Claude, GPT-4, and Gemini provide feedback

## 🤖 AI-Powered Quality

### Agent Integration

Multiple specialized AI agents assist with code quality:

- **DSA Code Reviewer** (`.github/agents/dsa-reviewer.agent.md`): Reviews algorithm solutions
- **Test Case Generator** (`.github/agents/test-case-generator.agent.md`): Creates test cases
- **Algorithmic Pattern Spotter** (`.github/agents/algorithmic-pattern-spotter.agent.md`): Identifies patterns

See [AGENTS.md](../AGENTS.md) for detailed agent guidelines.

### Automated Reviews

PR reviews automatically include:

- **Correctness**: Verification of algorithm logic
- **Complexity**: Time and space complexity analysis
- **Patterns**: Identification of algorithmic patterns
- **Optimization**: Suggestions for improvement
- **Best Practices**: Language-specific recommendations
- **Related Problems**: Links to similar problems

### Quality Commands with AI Context

```bash
# Generate LLM-assisted code review
node scripts/llm-review.js <file>

# Generate learning topics from research papers
node scripts/generate-llm-learning-topic.js

# Start AI-assisted interview
python3 scripts/start_interview.py
```

## 📚 Best Practices

### Algorithm Development

1. **Write First**: Focus on solving the problem
2. **Test**: Write Vitest tests for complex solutions
3. **Analyze**: Use complexity analyzer to verify Big O
4. **Optimize**: Apply suggestions from quality reports
5. **Document**: Add comments explaining complex logic
6. **Review**: Run quality checks before committing

### Code Quality

1. **Fix Errors**: Address ESLint errors immediately
2. **Review Warnings**: Consider ESLint warnings for improvements
3. **Format Consistently**: Use Prettier for consistent style
4. **Validate Security**: Review security audit results
5. **Test Coverage**: Aim for high coverage on reusable code
6. **Agent Feedback**: Review AI agent suggestions in PRs

### Educational Use

1. **Study Patterns**: Review detected algorithmic patterns
2. **Compare Complexities**: Verify expected vs actual performance
3. **Learn from Reports**: Read recommendations and explanations
4. **Track Progress**: Monitor quality improvements over time
5. **Active Recall**: Use daily learning issues for spaced repetition
6. **Mock Interviews**: Practice with AI-assisted interview system

## 🚨 Troubleshooting

### Common Issues

#### ESLint errors prevent commit

```bash
npm run lint:fix  # Auto-fix many issues
npm run lint      # See remaining issues
```

#### Prettier formatting required

```bash
npm run format    # Auto-format all files
```

#### Tests failing

```bash
npm test          # Run in watch mode to debug
npm run test:ui   # Use visual UI for debugging
```

#### Complexity analysis failed

```bash
node scripts/complexity-analyzer.js <file>  # Test specific file
```

#### Pre-commit hooks not working

```bash
npx husky install         # Reinstall hooks
npx pre-commit install    # Setup pre-commit
```

### Debug Mode

```bash
DEBUG=true npm run quality:full
```

## 🔗 Integration Points

- **VS Code**: ESLint and Prettier extensions for real-time feedback
- **GitHub Actions**: Automated quality checks on every push/PR
- **Pre-commit**: Local quality gates before commits
- **Vitest**: Fast unit testing with watch mode and UI
- **AI Agents**: Multi-agent code reviews on pull requests
- **Performance Dashboard**: Links to benchmark results (future)

## 📈 Future Enhancements

- **Test Coverage**: Automatic test generation for algorithms
- **Performance Regression**: Detect performance degradation
- **AI Insights**: ML-powered code improvement suggestions
- **Interactive Learning**: Guided tutorials based on code analysis
- **Competition Mode**: Compare solutions with community
- **System Design**: Quality checks for architecture patterns

---

## 🎯 Quick Start Checklist

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run quality:check` to verify setup
- [ ] Run `npm test` to verify tests work
- [ ] Run `npm run complexity:leetcode` to analyze algorithms
- [ ] Check `.github/workflows/` for enabled workflows
- [ ] Review generated `quality-report.md`
- [ ] Setup pre-commit hooks (optional): `npx husky install`
- [ ] Review [AGENTS.md](../AGENTS.md) for agent guidelines
- [ ] Check [TESTING.md](./TESTING.md) for testing guide

The system is now ready to help improve your code quality and algorithm understanding! 🚀
