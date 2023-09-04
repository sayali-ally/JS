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









  function sum(a){
    return function(b){
        return a+b;
    }
  }


  function sum(n){
    const sum_to_inner=(m)=>{
        if(m===0)
        return 0;
        else
        return m+sum_to_inner(m-1);
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
    }
    return sum_to_inner(n);
}
console.log(sum(5));









function add(x){
  return function (y){
    return function (z){
      return x+y+z;
    }
  }
}


function add(a){
  return function (b){
    return a+b;
  }
}



function sum(n){
  const sum_to_inner=(m)=>{
    if(m===0){
      return 0;
    }
    else{
      return m+sum_to_inner(m-1);
    }
  }
  return sum_to_inner(n);
}
console.log(sum(5))