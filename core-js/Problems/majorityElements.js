/**
 * Majority Elements
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears
 * more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * *
 * Example 1:
 *
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 *
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 *Thank you for your business! We look forward to working with you again.
 */

// element in an array

// Function to find Majority element
// in an array
function findMajority(arr, n) {
    let maxCount = 0;
    let index = -1; // sentinels

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] == arr[j])
                count++;
        }

        // Update maxCount if count of
        // current element is greater
        if (count > maxCount) {
            maxCount = count;
            index = i;
        }
    }

    // If maxCount is greater than n/2
    // return the corresponding element
    if (maxCount > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}

// Driver code
//let arr = [1, 1, 2, 1, 3, 5, 1];
let arr = [2, 2, 1, 1, 1, 2, 2]
    //let arr = [3, 2, 3];
let n = arr.length;

// Function calling
findMajority(arr, n);