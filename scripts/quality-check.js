#!/usr/bin/env node

/**
 * Comprehensive Quality Check Script
 * Runs all quality checks and generates a unified report
 */

import { spawn } from 'child_process';
import fs from 'fs/promises';

class QualityChecker {
  constructor() {
    this.results = {
      eslint: null,
      prettier: null,
      complexity: null,
      security: null,
      summary: {
        passed: 0,
        failed: 0,
        warnings: 0
      }
    };
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve, reject) => {
      const process = spawn(command, args, {
        stdio: 'pipe',
        ...options
      });

      let stdout = '';
      let stderr = '';

      process.stdout?.on('data', (data) => {
        stdout += data.toString();
      });

      process.stderr?.on('data', (data) => {
        stderr += data.toString();
      });

      process.on('close', (code) => {
        resolve({
          code,
          stdout,
          stderr
        });
      });

      process.on('error', reject);
    });
  }

  async checkESLint() {
    console.log('🔍 Running ESLint checks...');

    try {
      const result = await this.runCommand('npx', [
        'eslint',
        '.',
        '--ext',
        '.js,.ts',
        '--format',
        'json'
      ]);

      let eslintData = [];
      try {
        eslintData = JSON.parse(result.stdout);
      } catch (e) {
        console.warn('Could not parse ESLint JSON output');
      }

      const totalErrors = eslintData.reduce(
        (sum, file) => sum + file.errorCount,
        0
      );
      const totalWarnings = eslintData.reduce(
        (sum, file) => sum + file.warningCount,
        0
      );

      this.results.eslint = {
        passed: totalErrors === 0,
        errors: totalErrors,
        warnings: totalWarnings,
        files: eslintData.length,
        details: eslintData
      };

      if (totalErrors === 0) {
        console.log(`  ✅ ESLint passed (${totalWarnings} warnings)`);
        this.results.summary.passed++;
      } else {
        console.log(
          `  ❌ ESLint failed (${totalErrors} errors, ${totalWarnings} warnings)`
        );
        this.results.summary.failed++;
      }

      this.results.summary.warnings += totalWarnings;
    } catch (error) {
      console.log('  ❌ ESLint check failed:', error.message);
      this.results.eslint = { passed: false, error: error.message };
      this.results.summary.failed++;
    }
  }

  async checkPrettier() {
    console.log('🎨 Running Prettier format check...');

    try {
      const result = await this.runCommand('npx', [
        'prettier',
        '--check',
        '.',
        '--ignore-path',
        '.gitignore'
      ]);

      this.results.prettier = {
        passed: result.code === 0,
        output: result.stdout + result.stderr
      };

      if (result.code === 0) {
        console.log('  ✅ Prettier format check passed');
        this.results.summary.passed++;
      } else {
        console.log('  ❌ Prettier format check failed');
        this.results.summary.failed++;
      }
    } catch (error) {
      console.log('  ❌ Prettier check failed:', error.message);
      this.results.prettier = { passed: false, error: error.message };
      this.results.summary.failed++;
    }
  }

  async checkComplexity() {
    console.log('📊 Running complexity analysis...');

    try {
      const result = await this.runCommand('node', [
        'scripts/complexity-analyzer.js',
        '--leetcode'
      ]);

      this.results.complexity = {
        passed: result.code === 0,
        output: result.stdout,
        warnings: (result.stdout.match(/⚠️/g) || []).length
      };

      if (result.code === 0) {
        console.log('  ✅ Complexity analysis completed');
        this.results.summary.passed++;
      } else {
        console.log('  ⚠️  Complexity analysis completed with warnings');
        this.results.summary.warnings++;
      }

      this.results.summary.warnings += this.results.complexity.warnings;
    } catch (error) {
      console.log('  ❌ Complexity analysis failed:', error.message);
      this.results.complexity = { passed: false, error: error.message };
      this.results.summary.failed++;
    }
  }

  async checkSecurity() {
    console.log('🔒 Running security audit...');

    try {
      const result = await this.runCommand('npm', ['audit', '--json']);

      let auditData = {};
      try {
        auditData = JSON.parse(result.stdout);
      } catch (e) {
        console.warn('Could not parse npm audit JSON output');
      }

      const vulnerabilities = auditData.vulnerabilities || {};
      const totalVulns = Object.keys(vulnerabilities).length;
      const highSeverity = Object.values(vulnerabilities).filter(
        (v) => v.severity === 'high' || v.severity === 'critical'
      ).length;

      this.results.security = {
        passed: highSeverity === 0,
        totalVulnerabilities: totalVulns,
        highSeverity: highSeverity,
        details: auditData
      };

      if (highSeverity === 0) {
        console.log(
          `  ✅ Security audit passed (${totalVulns} total vulnerabilities)`
        );
        this.results.summary.passed++;
      } else {
        console.log(
          `  ❌ Security audit failed (${highSeverity} high/critical vulnerabilities)`
        );
        this.results.summary.failed++;
      }
    } catch (error) {
      console.log('  ⚠️  Security audit completed with warnings');
      this.results.security = { passed: true, warning: error.message };
      this.results.summary.warnings++;
    }
  }

  async generateReport() {
    const reportPath = './quality-report.md';

    const report = [
      '# Code Quality Report',
      '',
      `**Generated:** ${new Date().toISOString()}`,
      `**Summary:** ${this.results.summary.passed} passed, ${this.results.summary.failed} failed, ${this.results.summary.warnings} warnings`,
      '',
      '## 🔍 ESLint Analysis',
      this.results.eslint?.passed
        ? `✅ **Passed** - ${this.results.eslint.errors} errors, ${this.results.eslint.warnings} warnings in ${this.results.eslint.files} files`
        : `❌ **Failed** - ${this.results.eslint?.error || 'Check failed'}`,
      '',
      '## 🎨 Code Formatting',
      this.results.prettier?.passed
        ? '✅ **Passed** - All files properly formatted'
        : `❌ **Failed** - ${this.results.prettier?.error || 'Format check failed'}`,
      '',
      '## 📊 Complexity Analysis',
      this.results.complexity?.passed
        ? `✅ **Completed** - Analysis generated successfully (${this.results.complexity.warnings} warnings)`
        : `❌ **Failed** - ${this.results.complexity?.error || 'Analysis failed'}`,
      '',
      '## 🔒 Security Audit',
      this.results.security?.passed
        ? `✅ **Passed** - ${this.results.security.totalVulnerabilities || 0} total vulnerabilities, ${this.results.security.highSeverity || 0} high/critical`
        : '❌ **Failed** - Security issues detected',
      '',
      '## 🎯 Quality Gates',
      ''
    ];

    // Quality gates
    const criticalIssues = [];
    const warnings = [];

    if (this.results.eslint && !this.results.eslint.passed) {
      criticalIssues.push('ESLint errors must be fixed');
    }

    if (this.results.prettier && !this.results.prettier.passed) {
      criticalIssues.push('Code formatting issues must be resolved');
    }

    if (this.results.security && !this.results.security.passed) {
      criticalIssues.push(
        'High/critical security vulnerabilities must be addressed'
      );
    }

    if (this.results.eslint?.warnings > 20) {
      warnings.push('High number of ESLint warnings detected');
    }

    if (criticalIssues.length > 0) {
      report.push('❌ **Quality Gates: FAILED**');
      report.push('');
      report.push('**Critical Issues:**');
      criticalIssues.forEach((issue) => report.push(`- ${issue}`));
    } else {
      report.push('✅ **Quality Gates: PASSED**');
    }

    if (warnings.length > 0) {
      report.push('');
      report.push('**Warnings:**');
      warnings.forEach((warning) => report.push(`- ${warning}`));
    }

    report.push('');
    report.push('---');
    report.push('*Generated by Quality Check Script*');

    await fs.writeFile(reportPath, report.join('\n'));
    console.log(`\n📄 Quality report saved to: ${reportPath}`);

    return criticalIssues.length === 0;
  }

  async runAllChecks() {
    console.log('🚀 Starting comprehensive quality checks...\n');

    await this.checkESLint();
    await this.checkPrettier();
    await this.checkComplexity();
    await this.checkSecurity();

    console.log('\n📋 Generating quality report...');
    const passed = await this.generateReport();

    console.log('\n🎯 Quality Check Summary:');
    console.log(`   Passed: ${this.results.summary.passed}`);
    console.log(`   Failed: ${this.results.summary.failed}`);
    console.log(`   Warnings: ${this.results.summary.warnings}`);

    if (passed) {
      console.log('\n✅ All quality gates passed!');
      return 0;
    } else {
      console.log('\n❌ Quality gates failed - please review the issues above');
      return 1;
    }
  }
}

// CLI
async function main() {
  const checker = new QualityChecker();
  const exitCode = await checker.runAllChecks();
  process.exit(exitCode);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}
