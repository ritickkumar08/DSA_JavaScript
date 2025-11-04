function mergeSorted(nums1, nums2) {
    let n = nums1.length
    let m = nums2.length
    let i = 0
    let j = 0
    let result = []

    while (i < n && j < m) {
        if (nums1[i] <= nums2[j]) {
            result.push(nums1[i])
            i++;
        } else {
            result.push(nums2[j])
            j++;
        }
    }

    // Copy remaining elements from nums1
    while (i < n) {
        result.push(nums1[i]);
        i++;
    }

    // Copy remaining elements from nums2
    while (j < m) {
        result.push(nums2[j]);
        j++;
    }
    return result
}

nums1 = [1, 2, 3, 4, 5, 6]
nums2 = [2, 4, 8]
console.log(mergeSorted(nums1, nums2));
