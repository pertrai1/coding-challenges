function digitSum(s: string, k: number): string {
    let total = s;
    function calculateTotal(remaining: string) {
        const result = [];
        let curr = '';
        for (let i = 0; i < remaining.length; i += k) {
            result.push(remaining.slice(i, i + k));
        }
        for (let i = 0; i < result.length; i++) {
            let current = 0;
            for (let j = 0; j < result[i].length; j++) {
                current += +result[i][j];
            }
            curr += current;
        }
        return curr;
    }

    while (total.length > k) {
        total = calculateTotal(total);
    }

    return total;
};