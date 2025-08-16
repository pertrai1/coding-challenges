function areNumbersAscending(s: string): boolean {
    let currentNum = 0;
    for (const str of s.split(' ')) {
        const current = parseInt(str);
        if (!Number.isNaN(current)) {
            if (current <= currentNum) {
                return false;
            }
            currentNum = current;
        }
    }
    return true;
};