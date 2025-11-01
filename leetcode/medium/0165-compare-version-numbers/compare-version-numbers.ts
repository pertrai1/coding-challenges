function compareVersion(version1: string, version2: string): number {
    const segments1 = version1.split(".");
    const segments2 = version2.split(".");
    
    const maxLength = Math.max(segments1.length, segments2.length);
    
    for (let i = 0; i < maxLength; i++) {
        const num1 = parseInt(segments1[i] || '0', 10);
        const num2 = parseInt(segments2[i] || '0', 10);
        
        if (num1 < num2) {
        return -1;
        } else if (num1 > num2) {
        return 1;
        }
    }
    
    return 0;
};