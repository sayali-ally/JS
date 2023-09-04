Explain the difference between props and state.
props -> immutable ->cant be changed -> properties-> read-only 
states->mutable -> can be changed 

Write a component that increments a counter each time a button is clicked.

import React from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;


What are the lifecycle methods in a React component? How do they correspond to functional components?

Mounting-> Component is being created and inserted into the DOM -> render(), constructor(), componentDidMount() 
Updating-> any props or state changes in a component -> shouldComponentUpdate()
Unmounting->componentWillUnmount()-> component is being destroyed 
With the introduction of "useEffect" hook we can achieve the same functionality 


Mounting-> Component is being created and inserted into the DOM -> render(), constructor(), componentDidMount() 
achieve this using useEffect hook
useEffect(()=>{

},[])  -> empty dependency array , this ensures that the effect runs only after the initial render 


Updating-> any props or state changes in a component -> shouldComponentUpdate()
componentDidUpdate:
useEffect(()=>{

},[dependency1,dependency2])


Unmounting->componentWillUnmount()-> component is being destroyed 
useEffect(()=>{
    <code></code>
    return(
        <>Cleanup logic </>
    )
},[])
