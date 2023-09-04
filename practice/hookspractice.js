import React, {useState} from 'react';
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
            <p>Count:{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}


data fetching and dom manipulations 
import React ,{useState,useEffect} from "react";
const dynamicTitle=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title:`Count: ${count}`
    })

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
        </div>
    )
}

useMemo 
const expensiveCal=()=>{
    const [number,setNumber]=useState(0);

    const square=useMemo(()=>{
        return number*number;
    },[number])

    return(
        <div>
            <button onClick={()=>setNumber(number+1)}>increment</button>
        </div>
    )
}