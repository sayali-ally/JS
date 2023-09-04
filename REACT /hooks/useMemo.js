useMemo is used in react to optimize the performance of a component by memoizing a computed value.
So when we have expensive or frequently accessed computations we can avoid repeating re-rendering.

import React,{useState,useMemo} from 'react'
const expensiveCal = () =>{
    const [number,setNumber] = useState(0);

    const square = useMemo(()=>{
        return number*number;
    },[number])

    return(
        <div>
            <p>Number:{number}</p>
            <p>Square:{square}</p>
            <button onClick={()=>setNumber(number+1)}>increment</button>
        </div>
    )
}
export default expensiveCal;


const expensiveCal=()=>{
    const [number,setNumber]=useState(0);
    const square=useMemo(()=>{
        return number*number;
    },number )

    return (
        <div>
            <p>Number:{number}</p>
            <button onClick={()=>setNumber(number+1)}>+</button>
        </div>
    )
}


import React,{useState,useMemo} from 'react';
const expensiveCal=()=>{
    const [number,setNumber]=useState(0);
    const squre=useMemo(()=>{
        return number*number;
    },[number])

    return(
        <div>
            <p>Number: {number}</p>
            <button onClick={()=>setNumber(number+1)}>+</button>
        </div>
    )
}

export default expensiveCal;