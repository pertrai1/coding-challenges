#!/bin/bash

# Platform-Specific Review Hook
# Automatically provides platform-specific guidance when working on coding challenges

# Read JSON input from stdin
input=$(cat)

# Extract prompt and cwd from JSON
prompt=$(echo "$input" | grep -o '"prompt":"[^"]*"' | sed 's/"prompt":"\(.*\)"/\1/' || echo "")
cwd=$(echo "$input" | grep -o '"cwd":"[^"]*"' | sed 's/"cwd":"\(.*\)"/\1/' || echo "")

# Get changed files
CHANGED_FILES=$(git diff --name-only --cached 2>/dev/null)
if [ -z "$CHANGED_FILES" ]; then
  CHANGED_FILES=$(git diff --name-only 2>/dev/null)
fi

# Function to detect platform from text
detect_platform() {
  local text=$1

  # Check for platform keywords in text
  if echo "$text" | grep -qiE "leetcode|/leetcode/"; then
    echo "leetcode"
  elif echo "$text" | grep -qiE "greatfrontend|/greatfrontend/|gfe"; then
    echo "greatfrontend"
  else
    echo "unknown"
  fi
}

# Function to generate platform-specific guidance
generate_guidance() {
  local platform=$1

  case $platform in
    leetcode)
      cat << 'EOF'

📋 LEETCODE SOLUTION REVIEW CHECKLIST

When reviewing this LeetCode solution, please focus on:

1. Algorithm Correctness
   - Verify solution handles all test cases
   - Check edge cases: empty arrays, single elements, negatives, nulls
   - Confirm solution meets problem constraints

2. Time & Space Complexity
   - Verify Big O complexity is documented
   - Check if more efficient approach exists
   - Ensure complexity analysis is accurate

3. DSA Pattern Recognition
   - Identify the algorithmic pattern (Two Pointers, Sliding Window, BFS/DFS, DP, etc.)
   - Explain WHY this pattern is suitable
   - Provide the key insight that makes the solution work

4. Code Quality
   - Use clear, descriptive variable names
   - Add comments for non-obvious logic
   - Use modern ES6+ syntax where appropriate
   - Prefer const/let over var (except function definitions)

5. Related Problems
   - Suggest 2-3 similar problems using the same pattern
   - Help build pattern recognition skills

6. Common Mistakes
   - Point out common pitfalls with this pattern
   - Explain why certain approaches fail

EOF
      ;;

    greatfrontend)
      cat << 'EOF'

🌐 GREATFRONTEND SOLUTION REVIEW CHECKLIST

When reviewing this GreatFrontEnd solution, please focus on:

1. Browser & JavaScript APIs
   - Verify correct usage of browser APIs (DOM, Fetch, Storage, etc.)
   - Check for browser compatibility considerations
   - Validate event handling patterns (delegation, cleanup)
   - Ensure proper async/await and Promise usage

2. Frontend Performance
   - Check for unnecessary DOM manipulations
   - Verify efficient data structure usage for UI updates
   - Look for debouncing/throttling where appropriate
   - Consider memory leaks (event listeners, timers, closures)

3. API Design
   - Evaluate public API for clarity and usability
   - Check for consistent naming conventions
   - Verify parameter validation and error handling
   - Consider edge cases in browser environments

4. Code Organization
   - Prefer functional patterns where appropriate
   - Keep functions small and focused
   - Use modern ES6+ features (optional chaining, nullish coalescing)
   - Consider separation of concerns

5. Testing Considerations
   - Verify edge case handling (empty inputs, invalid types)
   - Check async operation handling
   - Verify cleanup logic (event listeners, timeouts)

6. JavaScript Best Practices
   - Use const by default, let only when needed
   - Prefer built-in methods (.map(), .filter(), .reduce())
   - Use strict equality (===)
   - Handle 'this' context correctly

EOF
      ;;

    *)
      # No specific guidance for unknown platforms
      exit 0
      ;;
  esac
}

# Main logic
PLATFORM=""

# Check if prompt contains review-related keywords
if ! echo "$prompt" | grep -qiE "review|check|analyze|evaluate|assess"; then
  exit 0
fi

# 1. First, try to detect from the prompt
detected=$(detect_platform "$prompt")
if [ "$detected" != "unknown" ]; then
  PLATFORM=$detected
fi

# 2. If not found, check changed files
if [ -z "$PLATFORM" ] || [ "$PLATFORM" = "unknown" ]; then
  for file in $CHANGED_FILES; do
    detected=$(detect_platform "$file")
    if [ "$detected" != "unknown" ]; then
      PLATFORM=$detected
      break
    fi
  done
fi

# 3. If still not found, check current working directory
if [ -z "$PLATFORM" ] || [ "$PLATFORM" = "unknown" ]; then
  detected=$(detect_platform "$cwd")
  if [ "$detected" != "unknown" ]; then
    PLATFORM=$detected
  fi
fi

# Generate platform-specific guidance
if [ -n "$PLATFORM" ] && [ "$PLATFORM" != "unknown" ]; then
  generate_guidance "$PLATFORM"
fi

exit 0
