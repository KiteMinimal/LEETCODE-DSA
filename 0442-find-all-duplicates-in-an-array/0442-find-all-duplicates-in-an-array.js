/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let i = 0 
    while(i < nums.length){
        let correct = nums[i] - 1
        if(nums[i] != nums[correct]){
            let temp = nums[i]
            nums[i] = nums[correct]
            nums[correct] = temp
        }
        else i++
    }


    let arr = new Array()
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != i + 1) arr.push(nums[i]) 
    }
    return arr
};