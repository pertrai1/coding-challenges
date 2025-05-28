function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const forwardMapping = new Map();
    const reverseMapping = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (forwardMapping.has(s[i])) {
            if (forwardMapping.get(s[i]) !== t[i]) {
                return false;
            }
        } else if (reverseMapping.has(t[i])) {
            if (reverseMapping.get(t[i]) !== s[i]) {
                return false;
            }
        } else {
            forwardMapping.set(s[i], t[i]);
            reverseMapping.set(t[i], s[i]);
        }
    }
    
    return true;
};