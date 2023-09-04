// always written in camelCase

<button onClick={}>Click Me!</button>


function football{
    const shoot=(a)=>{
        alert(a);
    }
    
    <button onClick={shoot("goal")}>Click Me!</button>
}

function car(props){
    return <h1>I'm a {props.brand} car!</h1>
}

function garage(){
    const cars=["bmw","audi","ford"];
    return (
        <>
            <ul>
                {cars.map((car)=><car brand={car}/>)};
            </ul>
        </>
    )
}


function car(props){
   return <h1>I'm a {props.brand} car</h1>
}
function garage(){
    const brand="audi"
    return(
        
    )
}