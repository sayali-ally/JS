// OnSubmit event 
import React, {useState} from "react";
import App from "./App";

const OnSubmit=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form got submitted",name,email);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value="name"
            >
            </input>
        </form>
    );
}
export default OnSubmit;




const OnSubmit=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted");
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value="name"
            ></input>
        </form>
    )
}