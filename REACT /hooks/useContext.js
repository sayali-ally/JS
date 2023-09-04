used to pass data between components without the use of props ,
making code look more cleaner adn maintainable 

import {createContext} from "react";
const myContext=createContext();
export default myContext;


import myContext from './myContext'
function App(){
    const dataToShare="this is the data to be shared";

    return(
        <myContext.Provider value={dataToShare}>
            <></>
        </myContext.Provider>
    )
}



function myComponent(){
    const data=useContext(myContext);
    return (
        <p>{data}</p>
    )
}export default myComponent;