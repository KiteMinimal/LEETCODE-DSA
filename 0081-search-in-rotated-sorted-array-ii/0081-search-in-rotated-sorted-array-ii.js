/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1, mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] == target) return true
        else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target <= nums[mid])
                r = mid
            else l = mid + 1
        }
        else {
            if (nums[mid] <= target && target <= nums[r])
                l = mid
            else r = mid - 1
        }
    }
    return false
};