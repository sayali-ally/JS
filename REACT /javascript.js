import { object } from "prop-types";

function declarations

function add(a,b){
    return a+b;
}

function expression 

const add=function(a,b){
    return a+b;
}

arrow function 
const add=(a,b)=>{
    return a+b;
}


IIFE
(function(){
    console.log()
})();

HIgher order function
function operate(a,b,operation){
    return operation(a,b);
}

(function(){
    console.log()
})();


higher order functions 
hoisting 
var let const 
async promises
callbacks 


function isEqual(v1,v2){
    const value1= (typeof v1==='object')?JSON.stringify(v1):v1;
    const value2= (typeof v2==='object')?JSON.stringify(v2):v2;
    return value1===value2;
}