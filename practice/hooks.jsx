useEffect-> used for data fetching and dom manipulations 
import React, {useState,useEffect} from 'react';
const dynamicTitle=()=>{
  const [count,setCount]=useState(0);
  
  useEffect(()=>{
    document.title= `Count: ${count}`;
  })
  
  return(
     <div>
           <button onClick={()=>setCount(count+1)}>Increment</button>
     </div>
   )
}
export default dynamicTitle;


useState-> to set the states
import React {useState} from 'react';
const Counter=()=>{
   const [count,setCount]=useState(0);
   
   const increment=()=>{
      setCount(count+1);
   }
   
   const decrement=()=>{
       setCount(count-1);
   }
   
   return(
   
    <div>
        <p>Counter:</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
   )
   
}
export default Counter;

useMemo-> used for caching the expensive or the most frequently accessed data;

import React {useState,useMemo} from 'react';
const expensiveCal=()=>{
  const [number,setNumber]=useState(0);
  
  const squareFunc=useMemo(()=>{
     return number*number;
  },[number])
  
  
  return(
    <div>Number:{number}</div>
    <p>square:{square}</p>
    <button onClick={()=>setNumber(number+1)}></button>
  )
}
export default expensiveCal;



import React, {useState,useMemo} from 'react';
const expensiveCal=()=>{
   const [number,setNumber]=useState(0);
  
  const squareFunc=useMemo(()=>{
     return number*number;
  },[number])
  
  return(
    <div>Number: {number}</div>
    <p>square:{square}</p>
    <button onClick={()=>setNumber(number+1)}></button>
  )
}

export default expensiveCal; 