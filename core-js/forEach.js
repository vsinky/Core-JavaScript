// const arr = [1, 3, 2, 4, 5, 3, 5, 7];
// arr.forEach((item) => {
//     console.log(item);
// }) ;

//map

/* Filter */

const arr = [1, 3, 2, 4, 5, 3, 5, 7];
/* const callback = (e) => {
if(e > 3) {
return e;
}
}; */
/* const obj = arr.find((e) => e === 2); */

/* const filteredArr = arr.filter((e) => e > 3); */

/* arr.forEach((item) => {
console.log(item);
}); */

/* const arr1 = arr.map((item) => {
return item * 2;
});
 */
const data = arr.reduce((arr, item) => {
    const arg = item * 2;
    arr.push(arg);
    return arr;
}, []);

const data1 = arr.reduce((count, item) => {
    count = count + item;
    return count;
}, 0);
console.log(data);