/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

function isValid(weights, days, mid) {
    let count = 1, sum = 0
    for (let i = 0; i < weights.length; i++) {
        if (sum + weights[i] > mid) {
            count++
            sum = weights[i]
        } else sum += weights[i]
    }
    return count <= days
}


var shipWithinDays = function (weights, days) {

    let l = weights[0], r = weights[0]
    for(let i = 1; i < weights.length; i++){
        l = Math.max(l , weights[i])
        r = r + weights[i]
    }

    let ans = -1
    while(l <= r){
        let mid = Math.floor((l+r)/2)
        if(isValid(weights, days, mid)){
            ans = mid
            r = mid - 1
        } else l = mid + 1
    }
    return ans
};