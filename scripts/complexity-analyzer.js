#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { pathToFileURL } from 'url';

/**
 * Complexity Analysis Tool
 * Analyzes JavaScript/TypeScript files for algorithmic complexity patterns
 */
class ComplexityAnalyzer {
  constructor() {
    this.patterns = this.initializePatterns();
    this.dataStructures = this.initializeDataStructures();
    this.algorithmicPatterns = this.initializeAlgorithmicPatterns();
  }

  initializePatterns() {
    return {
      // Time Complexity Patterns
      'O(1)': {
        patterns: [
          /return\s+[^;]+;?\s*$/m, // Single return statement
          /^\s*const\s+\w+\s*=\s*[^;]+;?\s*return/m // Simple assignment + return
        ],
        description: 'Constant time - single operations'
      },

      'O(log n)': {
        patterns: [
          /while\s*\([^)]*\/\s*=?\s*2[^)]*\)/g, // Division by 2
          /for\s*\([^;]*;\s*[^;]*\/\s*=?\s*2[^;]*;[^)]*\)/g,
          /Math\.floor\s*\(\s*[^)]*\/\s*2\s*\)/g, // Binary search patterns
          /\.shift\(\)|\.pop\(\)/g // Queue/Stack operations (if in loop)
        ],
        description: 'Logarithmic time - divide and conquer'
      },

      'O(n)': {
        patterns: [
          /for\s*\([^;]*;\s*\w+\s*<\s*\w+\.length[^;]*;[^)]*\)/g, // Array iteration
          /\.forEach\s*\(/g,
          /\.map\s*\(/g,
          /\.filter\s*\(/g,
          /\.reduce\s*\(/g,
          /while\s*\([^)]*\.length[^)]*\)/g,
          // Dynamic Programming patterns
          /dp\s*\[\s*\w+\s*\]\s*=.*dp\s*\[\s*\w+\s*-\s*\d+\s*\]/g,
          /for\s*\([^;]*i[^;]*;\s*i\s*<[^;]*n[^;]*;[^)]*\)\s*{[^}]*dp\s*\[/g,
          /memo\s*\[[^\]]*\]\s*=/g,
          /cache\s*\[[^\]]*\]\s*=/g,
          // Graph traversal patterns - single visit per node
          /visited\s*\[[^\]]*\]\s*=\s*true/g,
          /function\s+\w*\s*\([^)]*node[^)]*\)[^{]*\{[^}]*visited/g,
          /dfs\s*\(|bfs\s*\(/gi,
          // Sliding window core pattern - for loop with inner while adjusting left pointer
          /for\s*\([^)]*right[^)]*\)[^{]*\{[^}]*while[^}]*left/gi
        ],
        description:
          'Linear time - single pass through data or DP table construction'
      },

      'O(V + E)': {
        patterns: [
          // Graph traversal patterns
          /for\s*\([^)]*neighbors?[^)]*\)/gi,
          /for\s*\([^)]*adjacen[^)]*\)/gi,
          /for\s*\([^)]*edges?[^)]*\)/gi,
          /\.neighbors\s*\.\s*forEach/gi,
          /function\s+\w*\s*\([^)]*\)[^{]*\{[^}]*for\s*\([^)]*neighbor[^)]*\)/gi,
          /while\s*\([^)]*queue[^)]*\)/gi, // BFS patterns
          // Clone graph specific patterns
          /cloneGraph|clone.*node/gi,
          // DFS/BFS with adjacency list
          /dfs\s*\([^)]*\)[^{]*\{[^}]*for[^}]*neighbor/gi,
          /visited\s*\[[^\]]*\][^}]*for[^}]*neighbor/gi,
          // Topological sort patterns (Kahn's algorithm)
          /adjList|adjacencyList/gi,
          /inDegree|indegree/gi,
          // Graph iteration with adjacency structures
          /for\s*\([^)]*of\s+\w*[Aa]dj/gi
        ],
        description: 'Graph traversal - visits each vertex and edge once'
      },

      'O(n log n)': {
        patterns: [
          /\.sort\s*\(/g, // Most sorting algorithms
          /mergeSort|quickSort|heapSort/gi,
          /for[^{]*{[^}]*for[^{]*{[^}]*Math\.floor[^}]*\/\s*2[^}]*}/g // Nested loop with division
        ],
        description: 'Linearithmic time - efficient sorting'
      },

      'O(n²)': {
        patterns: [
          /for\s*\([^)]*\)\s*{[^}]*for\s*\([^)]*\)\s*{/g, // Nested loops
          /while\s*\([^)]*\)\s*{[^}]*while\s*\([^)]*\)\s*{/g,
          /\.forEach[^}]*\.forEach/g // Nested forEach
        ],
        description: 'Quadratic time - nested iteration'
      },

      'O(2ⁿ)': {
        patterns: [
          /function\s+\w+[^{]*{[^}]*return[^}]*\w+\s*\([^)]*-\s*1[^)]*\)\s*\+[^}]*\w+\s*\([^)]*-\s*1[^)]*\)/g, // Fibonacci-like recursion
          /if\s*\([^)]*<=\s*1[^)]*\)\s*return[^;]*;\s*return[^;]*\w+\([^)]*-\s*1[^)]*\)/g // Recursive patterns
        ],
        description: 'Exponential time - recursive branching'
      }
    };
  }

  initializeDataStructures() {
    return {
      Array: {
        patterns: [/\[[^\]]*\]/, /Array\.from/, /new Array/],
        operations: {
          access: 'O(1)',
          search: 'O(n)',
          insertion: 'O(1) amortized',
          deletion: 'O(n)'
        }
      },
      'Hash Map': {
        patterns: [/new Map\(\)/, /Map\s*\(/],
        operations: {
          access: 'O(1) average',
          search: 'O(1) average',
          insertion: 'O(1) average',
          deletion: 'O(1) average'
        }
      },
      Set: {
        patterns: [/new Set\(\)/, /Set\s*\(/],
        operations: {
          access: 'O(1) average',
          search: 'O(1) average',
          insertion: 'O(1) average',
          deletion: 'O(1) average'
        }
      },
      'Stack/Queue': {
        patterns: [/\.push\(/, /\.pop\(/, /\.shift\(/, /\.unshift\(/],
        operations: {
          'push/pop': 'O(1)',
          'shift/unshift': 'O(n) for arrays'
        }
      }
    };
  }

  initializeAlgorithmicPatterns() {
    return {
      'Dynamic Programming': {
        patterns: [
          /dp\s*\[/g,
          /memo\s*\[/g,
          /cache\s*\[/g,
          /for\s*\([^)]*\)\s*{[^}]*dp\s*\[[^}]*dp\s*\[\s*\w+\s*-\s*\d+\s*\]/g,
          /climbStairs|fibonacci|coinChange|longestSubsequence/gi
        ],
        complexity: 'O(n) to O(n²)',
        description: 'Bottom-up or memoized approach to solve subproblems'
      },
      'Graph Traversal': {
        patterns: [
          /visited\s*\[/g,
          /dfs\s*\(|bfs\s*\(/gi,
          /queue\s*\.\s*push.*neighbors?/gi,
          /cloneGraph/gi,
          /for\s*\([^)]*neighbors?[^)]*\)/gi,
          /adjacen/gi,
          // Topological sort patterns
          /adjList|adjacencyList/gi,
          /inDegree|indegree/gi,
          // Graph-specific iteration patterns
          /for\s*\([^)]*of\s+\w*[Aa]dj/gi,
          /while\s*\([^)]*queue\.length[^)]*\)[^{]*{[^}]*for\s*\([^)]*of/gi
        ],
        complexity: 'O(V + E)',
        description: 'Graph algorithms that visit each vertex and edge'
      },
      'Two Pointers': {
        patterns: [
          // Two pointers must have two distinct pointer variables moving towards/away from each other
          /let\s+\w+\s*=\s*0[^;]*;\s*let\s+\w+\s*=\s*\w+\.length\s*-\s*1/,
          // Pattern where left/right or start/end pointers move
          /\(left\s*<\s*right\)|\(start\s*<\s*end\)/gi
        ],
        complexity: 'O(n)',
        description: 'Two pointers moving towards each other'
      },
      'Sliding Window': {
        patterns: [
          // More specific sliding window patterns that avoid graph BFS false positives
          /window\s*(Size|Start|End)/gi,
          /left.*right.*window|right.*left.*window/gi,
          /window.*expand|window.*shrink/gi,
          /maxWindow|minWindow|windowSum/gi,
          /continuousSubarrays|subarrays.*window/gi,
          // Sliding window with explicit left/right pointers (not index)
          /let\s+(left|right)\s*=\s*0[^}]*while[^}]*(left|right)/gi,
          /for\s*\([^;]*(right|end)[^;]*[^)]*\)[^{]*{[^}]*(left|start)\s*\+\+/gi,
          // Frequency map/count with sliding window (common pattern)
          /frequencyMap|freqMap|freq\s*\[|frequency\s*\[/gi,
          /distinctCount|distinctNum|numDistinct/gi,
          // atMost/exactlyK transformation pattern (key insight for subarray counting)
          /atMost|atLeast|exactlyK|exactly\s*\(/gi,
          // Common sliding window problem patterns
          /countSubarrays|countValid|slidingWindow/gi,
          /subarraysWithKDistinct|longestSubstring.*Distinct/gi,
          // While loop with left pointer increment inside for loop (classic sliding window)
          /for\s*\([^)]*\)[^{]*\{[^}]*while[^}]*left[^}]*\+\+/gi
        ],
        complexity: 'O(n)',
        description: 'Sliding window technique for subarray/substring problems'
      },
      'Binary Search': {
        patterns: [
          /while\s*\([^)]*<=?[^)]*\)\s*{[^}]*Math\.floor\([^)]*\/\s*2\)/,
          /let\s+mid\s*=\s*Math\.floor/
        ],
        complexity: 'O(log n)',
        description: 'Binary search on sorted data'
      }
    };
  }

  /**
   * Analyze a single file for complexity patterns
   */
  async analyzeFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const analysis = {
        file: filePath,
        timeComplexity: this.analyzeTimeComplexity(content),
        spaceComplexity: this.analyzeSpaceComplexity(content),
        dataStructures: this.analyzeDataStructures(content),
        algorithmicPatterns: this.analyzeAlgorithmicPatterns(content),
        codeMetrics: this.analyzeCodeMetrics(content),
        recommendations: []
      };

      analysis.recommendations = this.generateRecommendations(analysis);
      return analysis;
    } catch (error) {
      return {
        file: filePath,
        error: error.message,
        timeComplexity: 'Unable to analyze',
        spaceComplexity: 'Unable to analyze'
      };
    }
  }

  analyzeTimeComplexity(content) {
    const detected = [];

    for (const [complexity, config] of Object.entries(this.patterns)) {
      for (const pattern of config.patterns) {
        if (pattern.test(content)) {
          detected.push({
            complexity,
            description: config.description,
            confidence: this.calculateConfidence(content, pattern)
          });
        }
      }
    }

    // If no patterns detected, return unknown
    if (detected.length === 0) {
      return { complexity: 'Unknown', confidence: 0 };
    }

    // Smart prioritization based on algorithmic patterns
    const algorithmicPatterns = this.analyzeAlgorithmicPatterns(content);

    // Priority-based complexity determination
    // Graph algorithms take priority over sliding window/two pointers
    // because graph patterns are more specific and often use similar loop structures
    if (algorithmicPatterns.some((p) => p.name === 'Graph Traversal')) {
      const graphComplexity = detected.find((d) => d.complexity === 'O(V + E)');
      if (graphComplexity) {
        return {
          ...graphComplexity,
          confidence: Math.max(graphComplexity.confidence, 75) // Boost confidence for graph patterns
        };
      }
    }

    if (
      algorithmicPatterns.some(
        (p) => p.name === 'Sliding Window' || p.name === 'Two Pointers'
      )
    ) {
      const linearComplexity = detected.find((d) => d.complexity === 'O(n)');
      if (linearComplexity) {
        return {
          ...linearComplexity,
          description: 'Linear time - sliding window or two pointers technique',
          confidence: Math.max(linearComplexity.confidence, 75) // Boost confidence for known patterns
        };
      }
    }

    if (algorithmicPatterns.some((p) => p.name === 'Dynamic Programming')) {
      const dpComplexity = detected.find(
        (d) => d.complexity === 'O(n)' || d.complexity === 'O(n²)'
      );
      if (dpComplexity) return dpComplexity;
    }

    // Sort by confidence and return most likely
    detected.sort((a, b) => b.confidence - a.confidence);
    return detected[0];
  }

  analyzeSpaceComplexity(content) {
    // Simple heuristics for space complexity
    const hasRecursion = /function[^{]*{[^}]*\w+\([^)]*-/.test(content);
    const hasDataStructures = /new\s+(Array|Map|Set)/.test(content);
    const hasNestedStructures = /\[\[|\{\{/.test(content);

    if (hasNestedStructures)
      return { complexity: 'O(n²)', reason: 'Nested data structures' };
    if (hasRecursion)
      return { complexity: 'O(n)', reason: 'Recursive call stack' };
    if (hasDataStructures)
      return { complexity: 'O(n)', reason: 'Additional data structures' };
    return { complexity: 'O(1)', reason: 'Constant extra space' };
  }

  analyzeDataStructures(content) {
    const detected = [];

    for (const [name, config] of Object.entries(this.dataStructures)) {
      for (const pattern of config.patterns) {
        if (pattern.test(content)) {
          detected.push({
            name,
            operations: config.operations,
            usage: content.match(pattern)?.[0] || 'Detected'
          });
        }
      }
    }

    return detected;
  }

  analyzeAlgorithmicPatterns(content) {
    const detected = [];
    const seen = new Set(); // Track unique pattern names

    for (const [name, config] of Object.entries(this.algorithmicPatterns)) {
      for (const pattern of config.patterns) {
        if (pattern.test(content)) {
          // Only add if we haven't seen this pattern name before
          if (!seen.has(name)) {
            detected.push({
              name,
              complexity: config.complexity,
              description: config.description,
              confidence: this.calculateConfidence(content, pattern)
            });
            seen.add(name);
          }
          break; // Move to next pattern name once we've found a match
        }
      }
    }

    return detected;
  }

  analyzeCodeMetrics(content) {
    const lines = content.split('\n');
    const codeLines = lines.filter(
      (line) =>
        line.trim() &&
        !line.trim().startsWith('//') &&
        !line.trim().startsWith('/*') &&
        !line.trim().startsWith('*')
    );

    return {
      totalLines: lines.length,
      codeLines: codeLines.length,
      cyclomaticComplexity: this.calculateCyclomaticComplexity(content),
      nestingLevel: this.calculateNestingLevel(content)
    };
  }

  calculateConfidence(content, pattern) {
    const matches = content.match(pattern);
    const matchCount = matches ? matches.length : 0;
    const totalLines = content.split('\n').length;
    return Math.min(100, (matchCount / totalLines) * 100 + 50);
  }

  calculateCyclomaticComplexity(content) {
    // Count decision points
    const decisionKeywords = [
      'if',
      'else',
      'while',
      'for',
      'case',
      'catch',
      '&&',
      '||',
      '?'
    ];
    let complexity = 1; // Base complexity

    for (const keyword of decisionKeywords) {
      // Escape special regex characters
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matches =
        content.match(new RegExp(`\\b${escapedKeyword}\\b`, 'g')) || [];
      complexity += matches.length;
    }

    return complexity;
  }

  calculateNestingLevel(content) {
    let maxLevel = 0;
    let currentLevel = 0;

    for (const char of content) {
      if (char === '{') {
        currentLevel++;
        maxLevel = Math.max(maxLevel, currentLevel);
      } else if (char === '}') {
        currentLevel--;
      }
    }

    return maxLevel;
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    // Algorithm-specific recommendations
    if (
      analysis.algorithmicPatterns.some((p) => p.name === 'Dynamic Programming')
    ) {
      recommendations.push({
        type: 'algorithm',
        message:
          '🎯 **DP Detected**: For climbing stairs, coin change, and similar problems, verify O(n) time complexity with O(n) space for bottom-up DP'
      });
    }

    // Graph algorithm recommendations
    if (
      analysis.algorithmicPatterns.some((p) => p.name === 'Graph Traversal')
    ) {
      recommendations.push({
        type: 'algorithm',
        message:
          '📊 **Graph Algorithm**: For clone graph, connected components, and graph traversal problems, expect O(V + E) time complexity where V=vertices, E=edges'
      });
    }

    // Sliding window algorithm recommendations
    if (analysis.algorithmicPatterns.some((p) => p.name === 'Sliding Window')) {
      recommendations.push({
        type: 'algorithm',
        message:
          '🪟 **Sliding Window Detected**: For subarray/substring problems, sliding window typically has O(n) time complexity with single pass through data'
      });
    }

    // Two pointers algorithm recommendations
    if (analysis.algorithmicPatterns.some((p) => p.name === 'Two Pointers')) {
      recommendations.push({
        type: 'algorithm',
        message:
          '👆 **Two Pointers**: For array problems with sorted data or opposite-direction traversal, expect O(n) time complexity'
      });
    }

    // Low confidence warnings
    if (analysis.timeComplexity.confidence < 70) {
      recommendations.push({
        type: 'verification',
        message:
          '⚠️ **Manual Review Needed**: Low confidence score suggests manual verification is required'
      });
    }

    // Complexity recommendations
    if (analysis.timeComplexity.complexity === 'O(n²)') {
      recommendations.push({
        type: 'optimization',
        message:
          'Consider using hash maps or more efficient algorithms to reduce O(n²) complexity'
      });
    }

    // Code quality recommendations
    if (analysis.codeMetrics.cyclomaticComplexity > 10) {
      recommendations.push({
        type: 'refactoring',
        message:
          'High cyclomatic complexity detected. Consider breaking down into smaller functions'
      });
    }

    if (analysis.codeMetrics.nestingLevel > 4) {
      recommendations.push({
        type: 'readability',
        message:
          'Deep nesting detected. Consider early returns or helper functions'
      });
    }

    return recommendations;
  }

  /**
   * Generate analysis report for a file
   */
  generateReport(analysis) {
    const report = [
      '# 🔍 Automated Complexity Analysis',
      '',
      '> ⚠️ **Disclaimer**: This is an automated analysis that may not be 100% accurate.',
      '> Always verify the complexity analysis manually, especially for complex algorithms.',
      '> Dynamic Programming, recursive, and mathematical algorithms may need manual review.',
      '',
      `**File:** ${analysis.file}`,
      `**Generated:** ${new Date().toISOString()}`,
      '',
      '## Time Complexity',
      `**Estimated:** ${analysis.timeComplexity.complexity}`,
      `**Description:** ${analysis.timeComplexity.description || 'N/A'}`,
      `**Confidence:** ${analysis.timeComplexity.confidence?.toFixed(1) || 'N/A'}%`,
      '',
      analysis.timeComplexity.confidence < 70
        ? '> ⚠️ **Low Confidence**: Please manually verify this analysis.'
        : '',
      '',
      '## Space Complexity',
      `**Estimated:** ${analysis.spaceComplexity.complexity}`,
      `**Reason:** ${analysis.spaceComplexity.reason}`,
      ''
    ];

    if (analysis.dataStructures.length > 0) {
      report.push('## Data Structures Used');
      analysis.dataStructures.forEach((ds) => {
        report.push(`- **${ds.name}**: ${ds.usage}`);
        Object.entries(ds.operations).forEach(([op, complexity]) => {
          report.push(`  - ${op}: ${complexity}`);
        });
      });
      report.push('');
    }

    if (analysis.algorithmicPatterns.length > 0) {
      report.push('## Algorithmic Patterns');
      analysis.algorithmicPatterns.forEach((pattern) => {
        report.push(`- **${pattern.name}**: ${pattern.complexity}`);
        report.push(`  - ${pattern.description}`);
      });
      report.push('');
    }

    report.push('## Code Metrics');
    report.push(`- **Lines of Code:** ${analysis.codeMetrics.codeLines}`);
    report.push(
      `- **Cyclomatic Complexity:** ${analysis.codeMetrics.cyclomaticComplexity}`
    );
    report.push(
      `- **Max Nesting Level:** ${analysis.codeMetrics.nestingLevel}`
    );
    report.push('');

    if (analysis.recommendations.length > 0) {
      report.push('## Recommendations');
      analysis.recommendations.forEach((rec) => {
        report.push(`- **${rec.type.toUpperCase()}**: ${rec.message}`);
      });
    }

    return report.join('\n');
  }

  /**
   * Analyze all files in a directory
   */
  async analyzeDirectory(dirPath, outputPath = null) {
    const files = await this.findSolutionFiles(dirPath);
    const analyses = [];

    console.log(`🔍 Analyzing ${files.length} files...`);

    for (const file of files) {
      console.log(`  Analyzing: ${path.relative(process.cwd(), file)}`);
      const analysis = await this.analyzeFile(file);
      analyses.push(analysis);

      if (outputPath) {
        const reportPath = path.join(
          outputPath,
          `${path.basename(file, path.extname(file))}-analysis.md`
        );
        await fs.writeFile(reportPath, this.generateReport(analysis));
      }
    }

    return analyses;
  }

  async findSolutionFiles(dirPath) {
    const files = [];

    async function scan(dir) {
      const entries = await fs.readdir(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory() && !entry.name.startsWith('.')) {
          await scan(fullPath);
        } else if (
          entry.isFile() &&
          /\.(js|ts)$/.test(entry.name) &&
          !entry.name.includes('.test.') &&
          !entry.name.includes('.spec.')
        ) {
          files.push(fullPath);
        }
      }
    }

    await scan(dirPath);
    return files;
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const analyzer = new ComplexityAnalyzer();

  if (args.length === 0) {
    console.log(`
🔍 Complexity Analysis Tool

Usage:
  node scripts/complexity-analyzer.js <file>           # Analyze single file
  node scripts/complexity-analyzer.js <directory>     # Analyze directory
  node scripts/complexity-analyzer.js --leetcode      # Analyze all LeetCode solutions

Examples:
  node scripts/complexity-analyzer.js leetcode/easy/0001-two-sum/two-sum.js
  node scripts/complexity-analyzer.js leetcode/easy/
  node scripts/complexity-analyzer.js --leetcode
    `);
    return;
  }

  try {
    if (args[0] === '--leetcode') {
      const analyses = await analyzer.analyzeDirectory(
        './leetcode',
        './docs/analysis'
      );

      // Generate summary report
      const summary = analyses.map((a) => ({
        file: path.relative(process.cwd(), a.file),
        timeComplexity: a.timeComplexity.complexity,
        confidence: a.timeComplexity.confidence
      }));

      console.log('\n📊 Analysis Summary:');
      console.table(summary);
    } else {
      const target = args[0];
      const stats = await fs.stat(target);

      if (stats.isFile()) {
        const analysis = await analyzer.analyzeFile(target);
        console.log('\n📋 Analysis Results:');
        console.log(analyzer.generateReport(analysis));
      } else {
        const analyses = await analyzer.analyzeDirectory(target);
        console.log(`\n✅ Analyzed ${analyses.length} files`);
      }
    }
  } catch (error) {
    console.error(`❌ Analysis failed: ${error.message}`);
    process.exit(1);
  }
}

// Export for use as module
export { ComplexityAnalyzer };

// Run CLI if called directly
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(console.error);
}
