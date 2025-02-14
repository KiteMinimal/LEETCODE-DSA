/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let i = 0, j = arr.length - 1, ans = 0
    while(i < j){
        let mid = Math.floor(i + (j - i)/2)
        if(arr[mid] > arr[mid+1]) {
            ans = mid
            j = mid
        }
        else {
            i = mid + 1
        }
    }
    return ans
};