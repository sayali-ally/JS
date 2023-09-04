// closures: its like having a a function with special variables that you can access and use even after the function 
// has finished executing 

// Closures are commonly used in scenarios like:

// Implementing data privacy and encapsulation.
// Creating private variables and methods.
// Implementing function factories to generate functions with different preset values.
// Implementing callbacks and event handlers.

//provides a better way of creating js code 

Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

function Welcome(name) {
    var greetingInfo = function (message) {
      console.log(message + " " + name);
    };
    return greetingInfo;
  }
  var myFunction = Welcome("John");
  myFunction("Welcome "); //Output: Welcome John
  myFunction("Hello Mr."); //output: Hello Mr.John

As per the above code, the inner function(i.e, greetingInfo) has access to the
variables in the outer function scope(i.e, Welcome) even after the outer function 
has returned.

//Different ways an HTML element can be accessed in a jS code
getElementById('idname')
getElementByClass('classname')
getElementByTagName('tagname')




Simple closure example : 

function outerFunction(){
  const a="hello";

  function innerFunction(){
    console.log(a);
  }

  return innerFunction;
}

const closure = outerFunction();
closure();


function outerFunction(){
  const a="this is outer function";

  function innerFunction(){
    console.log(a);
  }

  return innerFunction;
}


const closure=outerFunction();
closure();


function outerFunction(){
  const a="this is outer function";

   function innerFunction(){
    console.log(a);
   }

   return innerFunction;
}

const closure=outerFunction();
closure();


function outerFunction(){
  const a="this is a outer function";

  function innerFunction(){
    console.log(a);
  }
  return innerFunction;
}

const closure=outerFunction();
closure();




Memoization 

function addTo2(a){
  return a+2;
}
addTo2(2);
addTo2(4);
addTo2(2);




function memoizeAddto2(){
  var cache={};

  return function(num){
    if (num in cache){
      console.log("cache hit");
      return cache[num];
    }
    else{
      cache[num]=num+2;
      return cache[num];
    }
  }
}
var memoizedFunction=memoizeAddto2();
memoizedFunction(2);  //normal return 
memoizedFunction(2);  //cache return 
/////////////////////
function add(num){
  return num+2;
}

add(3);
add(3);

function memoizedAdd2(num){
  var cache={};
  return function(num){
    if(num in cache){
      return cache[num];
      console.log("cache hit");
    }
    else{
      cache[num]=num+2;
      return cache[num];
    }
  }
}



function addTo2(){
  var cache={};
  return function(num){
    if(num in cache){
      console.log("cache hit");
      return cache[num];
    }
    else{
      cache[num]=num+2;
      return cache[num];
    }
  }
}

var memoizedFunction=addTo2();
memoizedFunction(2); //normal return 
memoizedFunction(2); //cache return 



function Person(age,name){
  this.age=age;
  this.name=name;
}

const p1=new Person()




rest parameter :
function sum(...numbers){
  return numbers.reduce((acc,curr)=>acc+curr,0);
}
console.log(sum(1,2,3));  //output-> 6


const [first,second,...rest]=[1,2,3,4]


const ar1=[1,2,3];
const ar2=[4,5,6];
const ar=[...ar1,...ar2];





spread parameter :

const ar=[1,2,3];
const ar2=[...ar];
console.log(ar2);

class Student{
  constructor(name,age,rollNo){
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;
  }
}

function getDetails(){
  console.log(`${this.name} ${this.age} ${this.rollNo}`);
}

const stud1=new Student()




