/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i=0;i<nums.length;i++){
        let res = target - nums[i];
        if(map.has(res)){
            return [map.get(res),i];
        }
        else(
            map.set(nums[i], i)

        )
    } 
    return [-1,-1];   
};