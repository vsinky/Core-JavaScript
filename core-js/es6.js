/* es6 features */

// 1. let, canst 
// 2. arrow function 
// 3. default parameter 

// const value = (x, y = 4) => {
//     return x * y;
// }

// console.log(value(2, 5));

/* 4. Template literal */

// let name = 'sinky';
// let location1 = 'ludhiana';

//let str = name + ' ' + location1;
// let str = `${name}_${location1}`;
// console.log(str);

/* 5. Object Destructuring */

// const user = {
//     name: 'Sinky',
//     loc: {
//         loc1: 'banglore',
//         loc2: 'pune'
//     }
// };
// const { name, loc: { loc1, loc2 } } = user;
// console.log(name, loc2, loc1)

/* 6. Array Destructuring */

// const arr = [10, 11, 14, 16];
// const [item1, item2, ...item3] = arr;
// console.log(item1, item2, ...item3);

/* 7. Spread Operator. */

// const user = {
//     name: 'sinky',
// }

// const user1 = {
//     ...user,
//     location: 'delhi'
// }

// console.log(user);
// console.log(user1);


// const arr1 = [1, 2];

// const arr2 = [3, 4, 5, ...arr1];

// console.log(arr2);