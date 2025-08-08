function getCommon(nums1: number[], nums2: number[]): number {
    let nums1Pointer = 0;
    let nums2Pointer = 0;

    while (nums1Pointer < nums1.length && nums2Pointer < nums2.length) {
        if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums2Pointer++;
        } else if (nums2[nums2Pointer] > nums1[nums1Pointer]) {
            nums1Pointer++;
        } else {
            return nums1[nums1Pointer];
        }
    }
    return -1;
};