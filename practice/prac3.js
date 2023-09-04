lambda function is also called as arrow functions 
const sum((x,y)=>{
  return x+y;
})
sum(3,4);


first class function -> can be passed as an argument to other functions, 
also can be returned by another function

first order function -> can not be passed as an argument to other functions 

higher order function -> accepts another function as an argument or returns a function as a return value 

unary function-> accepts only 1 argument 

pure functions -> a pure function is a function where the return value is only determined by its arguments without
any side effect.
if we call a function with some arguments n number of times , then it should return the same value 

function multiply(a, b) {
    return a * b;
}
  
  console.log(multiply(2, 3)); // Output: 6
  console.log(multiply(2, 3)); // Output: 6

  
  