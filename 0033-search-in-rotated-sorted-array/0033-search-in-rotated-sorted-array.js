/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0, j = nums.length - 1, mid

    while(i <= j){
        mid = Math.floor((i + j)/2)

        if(nums[mid] == target) return mid

        else if (nums[i] <= nums[target]){
            if(nums[i] <= target && target <= nums[mid]) j = mid
            else i = mid + 1  
        }

        else{
            if(nums[mid] <= target && target <= nums[j]) i = mid
            else j = mid - 1
        }
    }
    return -1
};