//var string = prompt("please enter a string");
//console.log(string);

let num = 125;
//num = 121;
let originalNums = num;
let reverse = 0;

while (num != 0) {
    reverse = (reverse * 10) + (num % 10);
    num = parseInt(num / 10);
    console.log(num);
}
if (originalNums == reverse) {
    console.log(reverse + " is palidrome number");
} else {
    console.log(originalNums + " is not palidrome number");
}