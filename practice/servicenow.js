let counter=1;
switch(x):
case 0:
    let name;
case 1:
    let name;



Variable declarations using let and const must not be redeclared within the same scope 
let counter = 1;
let x = 1; // You need to define x before using it in the switch statement

switch (x) {
    case 0:
        let name0; // Variable declaration inside each case
        break; // Add a break statement to exit the case
    case 1:
        let name1; // Variable declaration inside each case
        break; // Add a break statement to exit the case
    default:
        break; // Add a default case if needed
}


for(let i=0;i<10;i++){
    console.log(i);
}
for(var i=0;i<10;i++){
    console.log(i);
}


abc(3)(4)  =>7 => done 

window.a  ->done

call apply bind -> not that good 
event loop -> done 
tricky questions on var let const ->  done 




function abc(){
    var x=10;
    if(true){
        console.log(x+1);
    }
    console.log(x);
}

abc();   10 10
console.log(x); -> reference error 



undefined 
11
10 
reference error 




block scope 

function abc(){
    if(true){
        let y=10;
    }
    console.log(10);
}
abc();


function compareScopes() {
    var a = 1;
    let b = 2;
    if (true) {
        var a = 3; // This affects the outer 'a' due to function scope
        let b = 4; // This only affects the 'b' within the if block due to block scope
    }
    console.log(a); // Output: 3
    console.log(b); // Output: 2
}

compareScopes();



console.log("Starting up");
setTimeout(()=>{
    console.log("on 0th second");
})
console.log("just there");
setTimeout(()=>{
    console.log("Default second");
})
console.log("ending here")



console.log("starting up");
setTimeout(()=>{
    console.log("0th second")
},0)
console.log("in between");
setTimeout(()=>{
 console.log("2nd second")
},2000);
console.log("ending up");


answer:
starting up 
in between 
ending up 
0th second 
2nd second

call stack , node api , call back queue 
all functions regiter to the call stack 
node api -> all inherited functions from c, c++ goes to node api 
call back queue -> acts as a buffer 

var x = 10;
if (true) {
    var x = 20;
}
console.log(x);
ans: 20




var x;
x=20;
if(true){
    x=20;
}
console.log(x);





var x = 10;
if (true) {
  x = 20;
}
console.log(x);

let x = 10;
if (true) {
  x = 20;
}
console.log(x);


var x;
if (true) {
  let x = 20;
}
console.log(x); 




console.log(x); - TDZ
let x = 10;
 


var x = 1;
function foo() {
    console.log(x);
    var x = 2;
}
foo();


let a = 1;
if (true) {
    let a = 2;
    console.log(a);
}
console.log(a);


if (true) {
    const b = 5;
    console.log(b);
}
console.log(b);


const person = { name: "Alice" };
person.name = "Bob";
console.log(person.name);


var c = 1;
if (true) {
    var c = 2;
    console.log(c);
}
console.log(c);



var b
console.log(a());
console.log(b);

function a() {
    return "Hello";
}

var b = "World";


function sum(a){
    return function(b){
        return a+b;
    }
}

const ans=sum(2)(3);
console.log(ans);
