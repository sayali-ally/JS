import React, {useState} from "react";
import App from "./App";
import './index.css'

const MyColor = () =>{
    const [color,setColor]=useState("red");

    return(
      
        <>
        <h1>My fav color is {color}</h1>
        <button type="button" onClick={()=>setColor("blue")}>Blue</button>
        
        <button type="button" onClick={()=>setColor("Pink")}>Pink</button>

        <button type="button" onClick={()=>setColor("green")}>Green</button>

        <button type="button" onClick={()=>setColor("blue")}>Blue</button>
        
        </>
    );
};
export default MyColor;

const MyColor=()=>{
    const [color,setcolor]=usestate('red');

    return(
        <div>
            <button onClick={()=>setcolor("blue")}>Blue</button>
            <button onClick={()=>setcolor("green")}>Green</button>
            <button onClick={()=>setcolor("pink")}>Pink</button>
        </div>
    )
}
export default MyColor;