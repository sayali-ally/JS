import React, {useState} from "react";
import App from "./App";

const MyCar =()=>{
 const [car,setCar]=useState({
    name:"bmw",
    year: "1998",
    color: "green"
 });

const updateColor =()=>{
    setCar( prev=>{
        return {...prev, color:"blue"}
    });
}
 return(
    <div>
    <p>This is my {car.name} from year {car.year} and with color {car.color} </p>

    <button type="button" onClick={updateColor}>Blue</button>
    </div>
 )
}

function car(){
    const[car,setCar]=useState({
        name:"bmw",
        year:1998,
        color:"green"
    });

    updateColor(){
        setCar(prev=>{
            return {...prev, color: 'blue'}
        })
    }


    return(
        <div>
            <p>
                this is my {car.name} 
            </p>
        </div>
    )
}


import React, {useState} from "react";
const MyCar=()=>{
    const [car,setCar]=useState({
        name:"bmw",
        year:"1998",
        color:"green"
    })

    const updateColor=()=>{
        setCar(prev=>{
            return {...prev, color:"blue"}
        })
    }

    return(
        <div>
            <p> this is my {car.name} from year {car.year} and with color {car.color}</p>

            <button onClick={updateColor}>Blue</button>
        </div>
    )
}