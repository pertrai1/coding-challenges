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
    this.patterns = {
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
          /while\s*\([^)]*\.length[^)]*\)/g
        ],
        description: 'Linear time - single pass through data'
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

    this.dataStructures = {
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

    this.algorithmicPatterns = {
      'Two Pointers': {
        patterns: [
          /let\s+\w+\s*=\s*0[^;]*;\s*let\s+\w+\s*=\s*\w+\.length\s*-\s*1/,
          /while\s*\([^)]*<[^)]*\)/
        ],
        complexity: 'O(n)',
        description: 'Two pointers moving towards each other'
      },
      'Sliding Window': {
        patterns: [
          /let\s+\w+\s*=\s*0[^;]*;\s*for\s*\([^;]*;\s*\w+\s*<[^;]*;\s*\w+\+\+\)/,
          /while\s*\([^)]*\)\s*{[^}]*while\s*\([^)]*\)\s*{[^}]*\w+\+\+/
        ],
        complexity: 'O(n)',
        description: 'Sliding window technique'
      },
      'Binary Search': {
        patterns: [
          /while\s*\([^)]*<=?[^)]*\)\s*{[^}]*Math\.floor\([^)]*\/\s*2\)/,
          /let\s+mid\s*=\s*Math\.floor/
        ],
        complexity: 'O(log n)',
        description: 'Binary search on sorted data'
      },
      'Dynamic Programming': {
        patterns: [
          /dp\[/,
          /memo\[/,
          /cache\[/,
          /for[^{]*{[^}]*for[^{]*{[^}]*dp\[/
        ],
        complexity: 'O(n²) typical',
        description: 'Dynamic programming with memoization'
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

    // Sort by confidence and return most likely
    detected.sort((a, b) => b.confidence - a.confidence);
    return detected.length > 0
      ? detected[0]
      : { complexity: 'Unknown', confidence: 0 };
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

    for (const [name, config] of Object.entries(this.algorithmicPatterns)) {
      for (const pattern of config.patterns) {
        if (pattern.test(content)) {
          detected.push({
            name,
            complexity: config.complexity,
            description: config.description,
            confidence: this.calculateConfidence(content, pattern)
          });
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
      `# Complexity Analysis Report`,
      `**File:** ${analysis.file}`,
      `**Generated:** ${new Date().toISOString()}`,
      '',
      '## Time Complexity',
      `**Estimated:** ${analysis.timeComplexity.complexity}`,
      `**Description:** ${analysis.timeComplexity.description || 'N/A'}`,
      `**Confidence:** ${analysis.timeComplexity.confidence?.toFixed(1) || 'N/A'}%`,
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
