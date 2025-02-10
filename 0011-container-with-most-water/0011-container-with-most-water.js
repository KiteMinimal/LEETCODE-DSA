/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0
    let j = height.length - 1
    let ans = 0
    let max = 0

    while(i != j){
        let l = Math.min(height[i], height[j])
        let b = j - i
        ans = l * b
        max = Math.max(max, ans)
        if(height[i] < height[j]) i++
        else j--
    }
    return max
};