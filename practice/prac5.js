Memoization 

It is a programming technique which increases the function's performance by caching its 
previous computed results.



Hoisting
variables, function declarations and classes are moved to the top of their scope before code execution 

console.log(msg);
var msg="this msg is some msg from universe that all things are in its right place, soon you'll be very happy with a job";

looks like
var msg;
console.log(msg);  -> undefined 
msg="the same msg form universe";
console.log(msg)  -> msg 



What are classes in ES6
class Bike {
    constructor(color, model) {
      this.color = color;
      this.model = model;
    }
  
    getDetails() {
      return this.model + " bike has" + this.color + " color";
    }
  }



  


