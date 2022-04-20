/* Promise states: */

/* - Pending
- Fulfilled
- Rejected */

// How to create the promise

// const promise = new Promise((resolve, reject) => {
//     reject('Promise is Rejected');
// });

// promise.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// });


// const asycTask = () => {
//     const promise = new Promise((resolve, reject) => {
//         reject('Promise is Rejected');
//     });
//     return promise;
// }

// promise.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// });






// const promise = Promise.reject('Its Fail');
// const asycTask = () => {
//     const promise = new Promise((resolve, reject) => {
//         let error = false;
//         setTimeout(() => {
//             if (error) {
//                 reject('Promise is Rejected');
//             } else {
//                 resolve({ message: 'Promise is Completed' });
//             }

//         }, 2000);
//     });
//     return promise;
// }


// asycTask().then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// });





// const promis1 = Promise.resolve('Its Resolve');
// const promis2 = Promise.resolve('Its Resolved');
// Promise.all([promis1, promis2]).then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('FINALLY CALLED:');
// });


const promis2 = Promise.resolve('Its Resolved');
const promis1 = Promise.reject('Its reject');

Promise.race([promis2, promis1]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('FINALLY CALLED:');
});