/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init;
    for(let i=0;i<nums.length;i++){
        if(nums.length!=0){
            res=fn(res,nums[i]);
        }
        else{
            return init;
        }

    }
    return res;
    
};