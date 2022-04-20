//  function outer(name) {
//      console.log('Hello Outer function:', name);

//const { add } = require("nodemon/lib/rules")

//      function inner(key) {
//          console.log('Hello Inner function:', key);
//      }
//      inner('lastname');
//  }

//  outer('name of fun');
// 
// function outer(name) {
//  //console.log('Hello Outer function:', name);
// return `Hello Outer function:${name}`;
// }


//  function outer() {
//  function inner(){
//  console.log('Hello inner function:');
//  }
//  return inner;
//  }
//  const inner = outer();
//  console.log(inner())



// function cal(x) {
//     function add(y) {
//         return x + y;

//     }
//     return add;
// };

// const adding = cal(5);
// const result = adding(5);
// console.log(result);
// function cal(x){
//     function add(y){
//      return x + y;
//     }
//     return add;
//   };

//   const adding = cal(5); // x
//   const result = adding(5); // y
//   console.log(result)


// function cal(x) {
//     function multi(y) {
//         return x * y;

//     }
//     return multi;
// };

// const multi = cal(5);
// const result = multi(5);
// console.log(result);


// class User {
//     constructor(name, lastname) {
//         this.lastname = lastname;
//         this.name = name;
//     }

// }
// const user1 = new User('sinky', 'verma');
// console.log(user1);


// class Demo {
//     constructor(name, lastname) {
//         this.name = name;
//         this.lastname = lastname;

//     };
//     fun() {
//         console.log('hello${this.name}');
//     }
// }
// let demo = new Demo('sinky', 'Verma');
// console.log(demo);


// class User {
//     constructor(name, lastname) {
//         this.name = name;
//         this.lastname = lastname;

//     };
//     get getName() {
//         return this.name;
//     }
//     set setName(name) {
//         this.name = name;
//     }
// };
// let user = new User('sinky', 'Verma');
// demo.setName('superman');
// console.log(user).getName;




// classes


class User {
    constructor(name) {
        this.name = name;
    }

    set setName(x) { // setter
        this.name = x;
    }

    get getName() { // getter
        return this.name;
    }
}

const user1 = new User();
user1.setName = 'superman';

console.log(user1.name, user1.getName);