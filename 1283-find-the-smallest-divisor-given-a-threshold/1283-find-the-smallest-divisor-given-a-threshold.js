/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1, right = Math.max(...nums)

    const isOutcome = (divisor) => {
        let count = 0
        for(let value of nums){
            if(value%divisor == 0) count += Math.floor(value/divisor)
                else count += Math.floor(value/divisor) + 1
        }
        return count <= threshold
    }

    while(left < right){
        let mid = Math.floor((left + right)/2)
        if(isOutcome(mid)){
            right = mid
        } else left = mid + 1
    }
    return left
};