useRef does not cause the component to re-render when it changes , helps to interact with the dom element directly 


import React, {useRef} from "react";
const myComp=()=>{
    const inputRef=useRef(null);
    const countRef=useRef(0);

    return(
        <div>
            <input ref={inputRef}/>
        </div>
    )
}



cosnt myComp=()=>{
    const inputRef=useRef(null);

    const focusInput=()=>{
        inputRef.current.focus();
    }

    return(
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={focusInput}>focus</button>
        </div>
    )

}