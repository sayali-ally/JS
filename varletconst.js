// var - function scope - 
// accessible only in the function where they are defined 
// Hoisting - Variables declared with var are hoisted to the top of the scope. you can access and 
// assign values to them before they are declared.

console.log(x);    //output ->undefined
var x=5;
console.log(x);    //output ->5 

// The above  code ^^ is interpreted by the javascript as below:

var x; // Declaration is hoisted to the top
console.log(x); // Output: undefined
x = 5; // Assignment remains in its original position
console.log(x); // Output: 5







// let/const - block scope 
// variables declared with let are not hoisted to the top , you need to declare before accessing them.
// let, const variables are not hoisted. You need to declare them before accessing them.

console.log(x); // Throws a ReferenceError
let x = 5;
console.log(x); // Output: 5

//fix this 
let x;
console.log(x); // Output: undefined
x = 5;
console.log(x); // Output: 5


var function scope ,during hoisting the variables are hoisted to the top of the scope

let const - block scope , they are not hoisted , they throw ReferenceError


console.log(x);
var x=5;



var x;
console.log(x);
x=5;




