Build a form component with input fields for a username and password.

import React ,{useState} from "react";
import { parseClassName } from "react-toastify/dist/utils"
const Form=()=>{
    const [data,setdata]=useState({
        name:'',
        email:''
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        setdata(()=>{
            name:'',
            email:''
        })
    }

    const handleChange=()=>{
        
    }

    return (
        <div>

        </div>
    )
}


function LoginForm(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleUsernameChange=(event)=>{
        setUsername(event.target.value);
    }

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("submitted",{username,password});
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <p>Username:</p>
                <input
                  type="text"
                  name="name"
                  value={username}
                  onChange={handleUsernameChange}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button>Submit</button>
        </form>
    )
}
export default LoginForm;



function Form(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const isUsernameValid=username.length>=5;
    const isPasswordValid=password.length>=8;

    const handleUsernameChange=(event)=>{
        setUsername(event.target.value);
    }
    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        if(isPasswordValid && isUsernameValid){
            console.log("submitted",{username,password});
        }
        else{
            console.log("invalid form submission")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type="name"
                onChange={handleUsernameChange}
                value={username}
                className={isUsernameValid?"valid":"invalid"}
           />
        </form>
    )
}