/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;
    
    while (i < nums.length) {
        if (nums[i] !== i + 1) { 
            let correct = nums[i] - 1;

            if (nums[i] === nums[correct]) {
                return nums[i]; // Found duplicate
            }
            
            // Swap nums[i] and nums[correct]
            [nums[i], nums[correct]] = [nums[correct], nums[i]];
        } else {
            i++;
        }
    }
    
    return -1; // (Though problem guarantees a duplicate)
};
