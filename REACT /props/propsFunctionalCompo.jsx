
parent 

const parent=()=>{
    const name="jhon";
    const age=24;
    return <Child name={name} age={age}/>
}


Child
const child=(props)=>{
    return(
        <div>
            <p>My name is {props.name} and age is {props.age}</p>
        </div>
    )
}