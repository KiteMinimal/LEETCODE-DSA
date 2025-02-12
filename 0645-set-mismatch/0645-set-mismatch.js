/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let set = new Set()
    let dup = 0
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])) dup = nums[i]
        else set.add(nums[i])
    }
    let count = 1
    for(let i = 0; i < set.size; i++){
        if(!set.has(count)) return [dup,count]
        else count++
    }
    return [dup, count]
};