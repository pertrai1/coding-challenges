function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // Bellman-Ford
    // Initialize distances
    let prices = Array(n).fill(Infinity);
    prices[src] = 0;

    // Relax edges k + 1 times (k stops = k + 1 flights)
    for (let i = 0; i <= k; i++) {
        const tempPrices = [...prices]; // copy current prices

        // try to improve each flight - relaxation loop
        for (const [from, to, price] of flights) {
            if (prices[from] !== Infinity) { // this is the Bellman-Ford relaxation
                tempPrices[to] = Math.min(tempPrices[to], prices[from] + price);
            }
        }

        prices = tempPrices;
    }

    return prices[dst] === Infinity ? -1 : prices[dst];
};