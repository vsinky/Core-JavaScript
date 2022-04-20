// const twosum = (nums, target) => {
//     let hash = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[target - nums[i]] !== undefined) {
//             return [hash[target - nums[i]], i]
//         }
//         hash[nums[i]] = i
//     }
// };

var twoSum = function(nums, target) {
    const num = []
    var l = nums.length;
    for (i = 0; l - 1; i++) {
        x = nums[i];
        y = target - x;
        if (nums.includes(y)) {
            num[0] = i;
            num[1] = nums.indexOf(y);
            if (num[1] != num[0]) { break }

        }
    }
    return num
};