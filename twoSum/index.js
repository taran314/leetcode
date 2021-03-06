// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Brute force approach O(n^2)
var twoSum = function(nums, target) {
    var final;
    for(i=0; i < nums.length; i++){
        for(j=0; j < nums.length && i !== j; j++){
            
            if (nums[i] + nums[j] === target) {
                final = [i,j];
            }
        }
    }
    return final;
};