// const user = {
//     name: 'sinky',
//     lastName: 'verma'
// };
// user.a = 'preety';
//console.log(user);

// let user = {
//     name: 'sinky',
//          lastName: 'verma'
//          locations: {
//              first: 'bangalore',
//              second: 'mumbai'
//          },
//          arr: [1,2,3,4,5],
//          method: () => {
//              return this.name;
//          } 

// };

// const bird = {
//     size: 'small',
// };
// console.log(brid.canFly)
// bird.canFly = true;


// let name;
// console.log(typeof name);

function user(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}
const user1 = new user('sinky', 'verma');
const user2 = new user('preety', 'verma');
console.log(user1, user2);

// const car = {
//     name: 'maruti',
//     canRun: function() {
//         console.log('car can run');
//     }
// }
// car.canRun();

// const user3={}
// var user4=Object.create(())
// var user5 = new Object();