#!/usr/bin/env node

/**
 * View Review Schedule - Display current spaced repetition review schedule
 *
 * Usage:
 *   node scripts/view-review-schedule.cjs
 *   node scripts/view-review-schedule.cjs --upcoming
 *   node scripts/view-review-schedule.cjs --stats
 */

const fs = require('fs');
const path = require('path');

const schedulePath = path.join(__dirname, '..', 'docs', 'reviews', 'review-schedule.json');

if (!fs.existsSync(schedulePath)) {
  console.log('⚠️  No review schedule found. Solve some problems first!');
  process.exit(0);
}

const schedule = JSON.parse(fs.readFileSync(schedulePath, 'utf8'));
const args = process.argv.slice(2);
const showUpcoming = args.includes('--upcoming');
const showStats = args.includes('--stats');

const today = new Date().toISOString().split('T')[0];

console.log('═══════════════════════════════════════════════════════════');
console.log('📚 SPACED REPETITION REVIEW SCHEDULE');
console.log('═══════════════════════════════════════════════════════════\n');

if (showStats) {
  // Show statistics
  const totalProblems = schedule.problems.length;
  const totalReviews = totalProblems * schedule.reviewIntervals.length;
  let completedReviews = 0;
  let pendingReviews = 0;
  let overdueReviews = 0;

  schedule.problems.forEach(problem => {
    problem.reviewsDue.forEach(review => {
      if (review.completed) {
        completedReviews++;
      } else if (review.scheduledDate < today) {
        overdueReviews++;
        pendingReviews++;
      } else {
        pendingReviews++;
      }
    });
  });

  const completionRate = Math.round((completedReviews / totalReviews) * 100);

  console.log('📊 STATISTICS');
  console.log('─────────────────────────────────────────────────────────\n');
  console.log(`  Total Problems:      ${totalProblems}`);
  console.log(`  Total Reviews:       ${totalReviews}`);
  console.log(`  Completed Reviews:   ${completedReviews} (${completionRate}%)`);
  console.log(`  Pending Reviews:     ${pendingReviews}`);
  console.log(`  Overdue Reviews:     ${overdueReviews}`);
  console.log(`  Review Intervals:    ${schedule.reviewIntervals.join(', ')} days`);
  console.log(`  Last Updated:        ${schedule.lastUpdated ? new Date(schedule.lastUpdated).toLocaleString() : 'Never'}`);
  console.log('\n');
}

if (showUpcoming || !showStats) {
  // Show upcoming reviews
  const upcomingReviews = [];

  schedule.problems.forEach(problem => {
    problem.reviewsDue.forEach(review => {
      if (!review.completed) {
        upcomingReviews.push({
          problem: problem.problemName,
          problemNumber: problem.problemNumber,
          difficulty: problem.difficulty,
          reviewNumber: review.reviewNumber,
          date: review.scheduledDate,
          interval: review.interval,
          issueNumber: review.issueNumber,
          isOverdue: review.scheduledDate < today,
          isDueToday: review.scheduledDate === today
        });
      }
    });
  });

  // Sort by date
  upcomingReviews.sort((a, b) => a.date.localeCompare(b.date));

  if (upcomingReviews.length === 0) {
    console.log('✅ No upcoming reviews! Solve more problems to build your schedule.\n');
  } else {
    console.log('📅 UPCOMING REVIEWS');
    console.log('─────────────────────────────────────────────────────────\n');

    const next7Days = upcomingReviews.slice(0, 10);

    next7Days.forEach(review => {
      const status = review.isOverdue ? '🔴 OVERDUE' : review.isDueToday ? '🟢 TODAY' : '⏳ Upcoming';
      const issue = review.issueNumber ? `Issue #${review.issueNumber}` : 'Not created yet';

      console.log(`  ${status}`);
      console.log(`    Problem:   #${review.problemNumber} - ${review.problem}`);
      console.log(`    Date:      ${review.date}`);
      console.log(`    Review:    ${review.reviewNumber} (${review.interval} days after solving)`);
      console.log(`    Difficulty: ${review.difficulty.toUpperCase()}`);
      console.log(`    Issue:     ${issue}`);
      console.log('');
    });

    if (upcomingReviews.length > next7Days.length) {
      console.log(`  ... and ${upcomingReviews.length - next7Days.length} more review(s)\n`);
    }
  }
}

if (!showStats && !showUpcoming) {
  // Show all problems
  console.log('📚 ALL PROBLEMS');
  console.log('─────────────────────────────────────────────────────────\n');

  schedule.problems.forEach((problem, index) => {
    const completed = problem.reviewsCompleted.length;
    const total = problem.reviewsDue.length;
    const progress = Math.round((completed / total) * 100);

    console.log(`  ${index + 1}. #${problem.problemNumber} - ${problem.problemName}`);
    console.log(`     Difficulty:    ${problem.difficulty.toUpperCase()}`);
    console.log(`     Solved:        ${new Date(problem.solvedDate).toLocaleDateString()}`);
    console.log(`     Progress:      ${completed}/${total} reviews (${progress}%)`);
    console.log(`     PR:            #${problem.prNumber}`);

    if (completed < total) {
      const nextReview = problem.reviewsDue.find(r => !r.completed);
      if (nextReview) {
        const isOverdue = nextReview.scheduledDate < today;
        const daysUntil = Math.ceil((new Date(nextReview.scheduledDate) - new Date(today)) / (1000 * 60 * 60 * 24));
        const timeStr = isOverdue ? 'OVERDUE' : daysUntil === 0 ? 'TODAY' : `in ${daysUntil} days`;
        console.log(`     Next Review:   ${nextReview.scheduledDate} (${timeStr})`);
      }
    } else {
      console.log(`     Status:        ✅ All reviews complete!`);
    }
    console.log('');
  });
}

console.log('═══════════════════════════════════════════════════════════');
console.log('💡 Use --stats to see statistics');
console.log('💡 Use --upcoming to see only upcoming reviews');
console.log('═══════════════════════════════════════════════════════════\n');
