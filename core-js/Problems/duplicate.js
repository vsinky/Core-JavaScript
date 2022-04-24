/**
 * Find All Duplicates in an Array
 *
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 *
 * Find all the elements that appear twice in this array.
 *
 * Could you do it without extra space and in O(n) runtime?
 *
 * Example:
 *
 * Input:
 * [4,3,2,7,8,2,3,1]
 *
 * Output:
 * [2,3]
 */
//[4, 3, 2, 7, 8, 2, 3, 1];
const findDuplicates = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
        const index = Math.abs(arr[i]);

        if (arr[index - 1] < 0) {
            result.push(index);
        }
        arr[index - 1] = -arr[index - 1];

    }
    return result;
};
const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(arr));


//      [4, 3, 2, 7, 8, 2, 3, 1]
//index  0  1  2  3  4  5  6  7
//i = 0
//value=4
//index = 4-1 =3 -->-7

//i = 1
//value=3
//index = 3-1 =2 -->-2