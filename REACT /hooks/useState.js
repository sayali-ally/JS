Hooks can only be used with functional components 

import {useState} from "react";
function timer(){
    const [count,setCount]=useState(0);
    return(
        <h1>my fav number {count} </h1>
    )
}


function mYcolor(){
    const [ color,setColor]=useState("red");

    return(
        <>
            <h1>The color currently is {color}</h1>
            <button onclick={()=>setColor("blue")}>Blue</button>

        </>
    )
}

STATE CAN HOLD STRINGS , numbers , boolean , arays, objects

import React, {useState} from 'react'
const Counter=()=>{
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };

    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>+</button>
            <button onclick={decrement}>-</button>
        </div>
    )
}

what is state in react ? 
state refers to the data that can change over time and affect how the UI is rendered 
