import React from "react";
import Child from "./Child";


const Parent=()=>{
    const name="john";
    const age=24;

    return <Child name={name} age={age}/>;
};
export default Parent;








const Parent=()=>{
    const name="jhon",
    const age=24

    return <Child name={name} age={age}/>
}
export default Parent;







const Parent=()=>{
    const name="Jhon",
    const age=24

    return <Child name={name} age={age}/>
}


function Parent(){
    const name="Jhon";
    const age=24;

    return <Child/>
}



function Child(props){
    return(
        <div>
            <h1> my name is {props.name} and age is {props.age}</h1>
        </div>
    )
}