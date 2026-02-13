export function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0;
  }

  const dp = Array.from({ length: amount + 1 }, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
}
