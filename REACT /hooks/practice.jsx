Create a simple React component that takes a name prop and renders a greeting message using that name.

import React from 'react'
import Child from './Child'
const Parent=()=>{
    const name="jhon"
    return <Child name={name}/>
}
export default Parent;



const Child=(props)=>{
    return(
        <div>Hi i'm {props.name}</div>
    )
}
export default Child;




const Greet=(name)=>{
    return(
        <div>Hello, {name}</div>
    )
}




How would you pass data from a parent component to a child component? How about from child to parent?
We can pass data from child to parent using callback 
we need to define callback function in parent class and pass it as an argument to the child class 


const ChildComponent = ({ handleClick }) => {
    return (
      <button onClick={handleClick}>Click me</button>
    );
  };
  
  const ParentComponent = () => {
    const [message, setMessage] = useState("");
  
    const handleClick = () => {
      setMessage("The button was clicked!");
    };
  
    return (
      <ChildComponent handleClick={handleClick} />
    );
  };

  

  const Parent=()=>{
    const [message,setMessage]=useState("");

    const handleClick=()=>{
        setMessage("The button is clicked");
    }

    return(
        <div>
            <Child handleClick={handleClick}/>
        </div>
    )
  }

  const Child=({handleClick})=>{
    return(
        <button onClick={handleClick}>ClickMe</button>
    )
  }


  const Child=({handleClick})=>{
    return(
      <button onClick={handleClick}>Click!!</button>
    )
  }

  const Parent=()=>{
    const [msg,setMsg]=useState('');

    const handleClick=()=>{
      setMsg('the button is clicked');
    }

    return(
      <Child handleClick={handleClick}/>
    )
  }