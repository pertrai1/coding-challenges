function anagramMappings(nums1: number[], nums2: number[]): number[] {
    const n = nums1.length;
    const numsIndexMap = new Map();
    for (let i = 0; i < nums2.length; i++) {
        if (!numsIndexMap.has(nums2[i])) {
        numsIndexMap.set(nums2[i], i);
        }
    }
    
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = numsIndexMap.get(nums1[i]);
    }
    return result;
};