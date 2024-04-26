/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
  //submitted to leetcode 
      function twoSum(nums, target) {
    const number =[]  ;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return number; 
}

const nums = [3, 2, 4];
const target = 6;
console.log(twoSum(nums, target));
