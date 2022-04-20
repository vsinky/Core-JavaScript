//const arr = ['welcome'];
//const arr=[];
// const arr = [1, 2, 3, 4, 5, true]

// console.log('array:--', arr);

// arr.push(1);
// arr.push(2);
// arr.pop();
// arr.unshift(2);
// arr.sort();
// arr.indexOf(2);
// arr.indexOf(5);
// arr.reduce(1);


// const arr = [1, 2, 3, 4];
// arr.slice(2);
// console.log(arr);

// const arr = [1,2,3,4,5,6];
// arr.forEach((item, i, data) =>{
//     console.log(item,i);
// });


// let count = 1;
// while (count < 10) {
//     console.log(count);
//     count += 2;
// }


// var num = 125;
// var originalNum = num;
// var reverse = 0;

// while (num != 0) {
//     reverse = (reverse * 10) + (num % 10);
//     num = parseInt(num / 10);
// }
// if (originalNum == reverse) {
//     document.write(originalNum + "Palindrome Number");
// } else {
//     document.write(originalNum + "Not a Palindrome number");
// }



// let value = 125;
// const revVlaue = () => {
//     let myRevVal = value.toString().split("").reverse().join("");
//     let myStrVal = value.toString();

//     if (myStrVal = myRevVal) {
//         console.log("Palindrome");
//     } else {
//         console.log("Not a palindrome");
//     }
// };

// revVlaue();

//let arr = new Array();
//let arr = [];

//types of Array
//1.using an array literal
//const arr = ["eat", "sleep"];

//2.using new array
//const arr = new Array("eat","sleep");

// empty array
//const myList = [ ];

// array of numbers
//const numberArray = [ 2, 4, 6, 8];

// array of strings
//const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
//const newData = ['work', 'exercise', 1, true];

//array funcation
// const newData = [
//     { 'task1': 'exercise' },
//     [1, 2, 3],
//     function hello() {
//         console.log('hello')
//     }
// ];

//Access elements of array using indicate(1,2,3)
// const myArray = ['h', 'e', 'l', 'l', 'o'];
// console.log(myArray[2]);


//loops
// let arr = ["Apple", "Pear"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//while 
// let i = 5;
// while (i < 15) {
//     i++;
//     console.log(i);
// }


// let i = 5;
// do {
//     console.log('Do condition', i);
//     i++;
// }
// while (i < 15) ;

// const arr = [1, 4, 3, 5, 4, 6];
// for (const key in arr) {
//     let i = +key;
//     if (i >= 3) { //check index
//         console.log(arr[i]);
// console.log(Number(key));
//console.log(+key);
//console.log(arr[key]);
//     }
// }

const arr = [1, 4, 3, 5, 4, 6];
for (const item of arr) {
    // console.log(arr.indexOf(item));
    console.log(item);
}