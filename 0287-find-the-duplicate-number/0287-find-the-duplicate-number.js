/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let i = 0
    while (i < nums.length) {
        let correct = nums[i] - 1
        if (nums[i] != nums[correct]) {
            let temp = nums[i]
            nums[i] = nums[correct]
            nums[correct] = nums[i]
        }
        else i++
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) return nums[i]
    }
};