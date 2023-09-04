Write a component that toggles between showing and hiding a piece of content when a button is clicked.

import React from "react"
const Toggle=()=>{
    const [content,setContent]=useState(false);

    const toggleContent=()=>{
        setContent(!showContent);
    }

    return(
        <div>
            <button onClick={toggleContent}>{content?'Hide Content':'Show content'}</button>
            <p>This is the content to be toggled </p>
        </div>
    )
}
export default Toggle;


Explain how event handling works in React.

Event handling is the process of managing and responding to user interactions  such as clicks,keyboard actions,
onClick
onChange
onSubmit 
onMouseOver
onfocus
onblur
onload
onunload


Create a component that receives an array of items as a prop and renders a list of these items.
import React from "react"
const ItemList=(props)=>{
    const {items}=props;

    return(
        <ul>
            {items.map((item,index)=>{
                <li key={index}>{item}</li>
            })}
        </ul>
    )
}
export default ItemList;

function App(){
    const items=["item1","item2","item3"];

    return(
        <div>  
            <ItemList items={items}/>
        </div>
    )
}
export default App;



function ItemList(props){
    const {arr}=props;

    return(
        <ul>
            {arr.map((item,index)=>{
                <li key={index}>{item}</li>
            })}
        </ul>
    )
}

function App(){
    const items=["item1","item2","item3"];
    return(
        <div>
            <ItemList items={items}/>
        </div>
    )
}


The key prop is used to provide a unique identifier for each list item 
to help React efficiently update the list when needed.