function checkRecord(s: string): boolean {
    return s.split("").filter(char => char === 'A').length < 2 && !s.includes('LLL'); 
};