function twoSum(nums, target) {
    const comp = {}
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i;

    }
    return [];
}
const nums = [2, 7, 11, 15]
console.log(twoSum(nums, 9));