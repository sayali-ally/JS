import React, { useCallback, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

this is used to memoize functions. basically used to prevent the recreation of functions everytime 
a component renders ,which can improve performance and avoid un-necessary renders of compos;


import {useCallback} from "react";

function App(){
  const [count,setCount]=useState(0);

  const handleClick= useCallback(()=>{
    setCount(count+1)
  },[count])

  return(
    <div>
      <p>Count:{count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}


