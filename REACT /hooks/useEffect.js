used for fetching Data, timers ,directly updating the DOM
re-render and re-render 


import {useState,useEffect} from "react"

function myFunction(){
    const[count,setCount]=useState(0);
    const[cal,setCal]=useState(0);

    useEffect(()=>{
       setCal(()=>count*2);
    },[count]);

    return(
        <>
            <p>count:{count}</p>
            <button onclick={()=>setCount((c)=>c+1)}>+</button>
            <p>calculation: {cal}</p>
        </>
    )
}

root.render(<myFunction/>)



useEffect(()=>{

},[])

this runs only on the first render


function Timer(){
    const [count,setCount]=useState(0);
    
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        },1000)
    },[]);
}



used for data fetching , DOM manipulations . The useEffect hook is called after every render.
It also handles cleanup when the component unmounts.

import React,{useState,useEffect} from 'react'
const dynamicTitle=()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title= `Count: ${count}`;
    });

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
    );

};
export default dynamicTitle;




// import React, {useState,useEffect} from 'react'
// const dynamicTitle=()=>{
//     const [count,setCount]=useState(0);

//     useEffect(()=>{
//         document.title=`Count: ${count}`;
//     });

//     return(
//         <div>
//             <button onClick=(()=>setCount(count+1))>+</button>
//         </div>
//     );
// }


import {useState,useEffect} from "react";

function App(){
    const [count,setCount]=useState(0);

    const dynamicTitle = useEffect(()=>{
        document.title= `Count:${count}`;
    })

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}