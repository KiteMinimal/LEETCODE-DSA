/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let i = 0, j = nums.length - 1
    while (i <= j) {
        let mid = Math.floor(i + (j - i) / 2)
        if (nums[mid] == target) return mid
        else if (nums[mid] < target) i = mid + 1
        else j = mid - 1
    }
    return i
};