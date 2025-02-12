/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let i = 0
    while (i < nums.length) {

        let correct = nums[i] - 1

        if ( nums[i] != nums[correct]) {
            let temp = nums[i]
            nums[i] = nums[correct]
            nums[correct] = temp
        }
        else i++
    }
    let count = 1
    for(let i = 0; i< nums.length; i++){
        if(count != nums[i])
        return [nums[i], count]
        else count++
    }
};