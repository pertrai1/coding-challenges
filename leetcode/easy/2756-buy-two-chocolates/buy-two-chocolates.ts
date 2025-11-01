function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    const total = prices[0] + prices[1];
    if (total <= money) {
        return money - total;
    } else {
        return money;
    }
};