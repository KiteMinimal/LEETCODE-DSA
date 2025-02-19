/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


var minEatingSpeed = function(piles, h) {
    let left = 1, right= Math.max(...piles)

    const canEatAll = (speed) => {
        let hoursNeeded = 0
        for(let bananas of piles){
            hoursNeeded += Math.ceil(bananas/speed)
        }
        return hoursNeeded <= h
    }

    while(left < right){
        let mid = Math.floor((left + right)/2)
        if(canEatAll(mid)){
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};