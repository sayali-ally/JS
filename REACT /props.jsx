
function car(props){
    return <h2>I'm a {props.brand} car!</h2>
}

function garage(){
    return (
        <>
        <h1>Who lives in this garage?</h1>
        <Car brand="ford"/>
        </>
    )
}
root.render(<garage/>)



function car(props){
    <h2>I'm a {props.brand}</h2>
}
function garage(){
    const carName="Ford";
    return(
        <>
            <h2>Who lives in my garage?</h2>
            <Car brand={carName}/>;
        </>
    );
}

root.render(<garage/>);


function car(props){
    return <h2>{props.brand.model}.</h2>
}

function garage(){
    const obj=[model : "mustang",year:2014];
    return (
        <>  
            <Car brand={obj}/>
        </>
    )
}



function car(props){
    <h2>I'm a {props.brand}</h2>
}
function garage(){
    const carbrand='Ford';
    return(
        <>  
            <h2>who lives in the garage</h2>
            <car brand={carbrand}/>;
        </>
    )
}


function car(props){
    <h2>I'm a {props.brand}</h2>
}

function garage(){
    const carbrand='Ford'
    return(
        <>
            <h2>who's this?</h2>
            <car brand={carbrand}/>
        </>
    )
}



function car(props){
    return <h1>I'm a {props.brand} car</h1>
}
function garage(){
    const brand="ford"
    return(
        <>
          <car brand={brand}/>
        </>
    )
}


function Car(props){
    return <h1>I'm a {props.brand} car</h1>
}

function garage(){
    const brand="ford";
    return(
        <div>
            <Car brand={brand}/>
        </div>
    )
}




function Parent(){
    
}