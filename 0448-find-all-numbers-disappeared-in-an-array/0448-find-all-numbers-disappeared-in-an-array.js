/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
     let i = 0
    while (i < nums.length) {

        let correctIdx = nums[i] -1

        if (nums[i] != nums[correctIdx]) {
            let temp = nums[i]
            nums[i] = nums[correctIdx]
            nums[correctIdx] = temp
        }
        else i++
    }
    let arr = new Array()
    for (let i = 0; i < nums.length; i++) {
        if (i != nums[i]-1)
            arr.push(i+1)
    }
    return arr
};