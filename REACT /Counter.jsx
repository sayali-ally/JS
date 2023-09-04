import React, {useState} from "react";
import App from "./App";

const Counter = () =>{
    const [count,setCount]=useState(0);

    const increment = () =>{
        setCount(count+1);
    }

    const decrement = ()=>{
        setCount(count-1);
    }

    return(
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
    );
};
export default Counter;


const Counter=()=>{
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

    return (
        <div>
            <p> count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}