// [1,2,3,4,4,4,5] 
/* {
repeatedNo: 4,
count: 3
} */

let arr = [1, 2, 3, 4, 4, 4, 5];

let formattedArr = arr.reduce((obj, el) => {
    if (obj[el]) {
        obj[el]++;
    } else {
        obj[el] = 1;
    }
    return obj;
}, {});
console.log(formattedArr);