function doubleEle(arr){
    this.arr=arr;
  }
  
  doubleEle.prototype.double=function(){
    let res= this.arr.map((item)=>item*2);
    return res;
  }
  
  const arr=new doubleEle([1,2,3,4,5]);
  console.log(arr.double());
  
  
  Question 1: Creating Prototype Methods
  Create a constructor function Person that takes name and age as parameters. 
  Add a prototype method introduce that returns a string introducing the person, 
  such as "My name is John and I am 25 years old." Create an instance of Person 
  and use the introduce method.
  
  function Person(name,age){
    this.name=name;
    this.age=age;
  }
  Person.prototype.introduce=function(){
    let ans = `my name is ${this.name} and my age is ${this.age}`;
    return ans;
  }
  
  const person1=new Person("jhon",25);
  console.log(person1.introduce());
  
  function doubleEle(num){
    this.num=num;
  }
  doubleEle.prototype.double=function(){
     let ans=this.num*2;
     return ans;
  }
  const num=new doubleEle(3);
  console.log(num.double());
  
  console.log(sum(5)(4)(3)(2)(1))
  function sum(n){
      if(n===1){
          return 1;
      }
      else{
          return function(x){
              return sum(n-1)(x) + n;
          }
      }
  
  }
  function sum_to_curried(n) {
    const sum_to_inner = (m) => {
      if (m === 0) {
        return 0;
      } else {
        return m + sum_to_inner(m - 1);
      }
    };
  
    return sum_to_inner(n);
  }
  
  console.log(sum_to_curried(2)); // Output: 55 (1 + 2 + ... + 10)
  
  function sum(n){
     const sum_to_inner=(m)=>{
     if(m===0)
     return 0;
     else{
     return m+sum_to_inner(m-1);
     }
     }
     return sum_to_inner(n);
  }
  
  console.log(sum(5));
   
  function sum(n){
       const sum_to_inner=(m)=>{
      if(m===0){
      return 0;
      }
      else{
      return m+sum_to_inner(m-1);
      }
      return sum_to_inner(n);
      }
   }
   
   console.log(sum_to_curr(2));
   
   
   
   function sum(n){
       const sum_to_inner=(m)=>{
          if(m===0){
              return 0;
          }
          else{
              return m+sum_to_inner(m-1);
          }
          return sum_to_inner(n);
      }
   }
   
   console.log(sum_to_curr(2));
  function sum(a){
  return function(b){
     return a+b;
   }
  }
  console.log(sum(2)(3)); 




  function doubleEle(arr){
    this.arr=arr;
  }
  doubleEle.prototype.double=function(){
    let res=arr.map((item)=>item*2);
    return res;
  }
  