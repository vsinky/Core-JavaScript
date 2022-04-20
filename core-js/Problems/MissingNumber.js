/**
 * Missing Number
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the
 *  one that is missing from the array.
 *
 * Example 1:
 *
 * Input: [3,0,1]
 * Output: 2
 * Example 2:
 *
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 */

let arrayOfNum = [9, 6, 4, 2, 3, 5, 7, 0, 1];
//let arrayOfNum = [3, 0,1];
let startNum = Math.min(...arrayOfNum);
let maxNumber = Math.max(...arrayOfNum);
let missing = [];

for (let i = startNum; i <= maxNumber; i++) {
    if (arrayOfNum.indexOf(i) == -1) {
        missing.push(i)
    }
}
console.log(missing)













//let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// arr = [1, 2, 3, 4, 6, 7, 8];
// let arr = [3, 0, 1];
// const missingNumber = (arr) => {
//     let sum = 0;
//     let missingCount = 0;

//     for (let i = 0; i < arr.length + 1; i++) {
//         //console.log(i);
//         sum += i;
//         //console.log(sum);

//         if (arr[i]) {
//             //console.log(arr[i]);
//             missingCount += arr[i];
//             console.log(missingCount);
//         }
//     }
//     return (sum - missingCount)
// };

// console.log(missingNumber(arr));