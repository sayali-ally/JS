Have you worked with any state management libraries (e.g., Redux, MobX)? 
If yes, explain how they work and why you might use them.



Redux:

Redux is a popular state management library for React applications. 
It follows the principles of a unidirectional data flow and implements the Flux architecture pattern. Here's how it works:

Store: Redux maintains a single store that holds the entire state of the application. This state is represented as a plain JavaScript object.

Actions: To change the state, you dispatch actions. Actions are plain objects with a type property that describes the type of action being performed. They can also carry additional data as payload.

Reducers: Reducers are pure functions that specify how the state should change in response to actions. They take the current state and an action, and return a new state. Reducers are responsible for updating the store.

Dispatch: Actions are dispatched using the dispatch function. When an action is dispatched, it flows through all the reducers, and the state is updated accordingly.

Connect: React components can connect to the Redux store using the connect function provided by the react-redux library. This allows components to access the state and dispatch actions.


HOC 



Create a button that toggles the visibility of a message when clicked.
 When the button is clicked once, the message should be displayed; 
 when clicked again, the message should be hidden.


 const Toggle=()=>{
    const [isdataSeen,setData]=useState(false);

    const ToggleData=()=>{
        setData(!isdataSeen);
    }

    return(
        <div>
            <button onClick={ToggleData}>
                {isdataSeen?'Hidden message':'Show Message'}
            </button>
            {isdataSeen && (
                <div>
                    <p> this is the message to toggle</p>
                </div>

            )}
        </div>
    )
 }




 import React,{useState} from "react";
 const Toggle=()=>{
    const [isDataVisible,setData]=useState(false);

    const ToggleData=()=>{
        setData(!isDataVisible)
    }

    return(
        <div>
            <button onClick={ToggleData}>
                {isdataSeen?'Hide':'show'}
            </button>
            {isDataVisible &&(
                <div>
                    <p>This is the message to toggle</p>
                </div>
            )}
        </div>
    )
 }


 Create an input field and a list of items. As the user types in the input field,
 the list of items should dynamically update to show only the items that match the input text

 import React, { useState } from 'react';

 function ItemFilter() {
   const [inputText, setInputText] = useState('');
   const [items, setItems] = useState([
     'Apple',
     'Banana',
     'Cherry',
     'Date',
     'Grape',
     'Kiwi',
     'Lemon',
   ]);
 
   const filteredItems = items.filter((item) =>
     item.toLowerCase().includes(inputText.toLowerCase())
   );
 
   const handleInputChange = (e) => {
     setInputText(e.target.value);
   };
 
   return (
     <div>
       <h2>Item Filter</h2>
       <input
         type="text"
         placeholder="Search items..."
         value={inputText}
         onChange={handleInputChange}
       />
       <ul>
         {filteredItems.map((item, index) => (
           <li key={index}>{item}</li>
         ))}
       </ul>
     </div>
   );
 }
 
 export default ItemFilter;
 








 
 Build a simple todo list application. Users should be able to add new tasks, 
 mark tasks as complete, and remove tasks.

 const Todo=()=>{
    const [complete,setComplete]=useState(false);
    const [addTask,setTask]=useState([]);
    const [removeTask,setRemoveTask]=useState(false);

    const addTask=(event)=>{
        setTask(event.target.value);
    }

    const completeTask=()=>{
        setComplete(!complete)
    }

    const TaskRemove=()=>{
        setRemoveTask('')
    }
    return(
        <div>
            <button onClick={addTask}>+</button>
            <button onClick={TaskRemove}>-</button>
            <button onClick={completeTask}>@</button>
        </div>
    )
 }


 function ToDo(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState('');

    const addNewTask=()=>{
        if(newTask.trim()===''){
            return;
        }
        setTasks([...tasks,newTask]);
        setNewTask('');
    }

    return(
        <div>
            <h2>Todo List</h2>
            <input
            type="text"
            placeholder="Add a new task here"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            />
            <button onClick={addNewTask}>Add</button>

            <ul>
                {tasks.map(task,index)=>(
                    <li key={index}>{task}</li>
                )}
            </ul>
        </div>
    )
 }


 Implement a drag-and-drop functionality. Create a list of items that can be rearranged by dragging and dropping.

 Implement a component that allows users to upload files, display a preview, and handle file validation

 const FileUpload=()=>{
    const [selectFile,setFileData]=useState(null);
    const [preview,setPreview]=useState(null);
    const [error,setError]=useState(null);

    const fileSelecthandler=(event)=>{
        const file=event.target.files[0];
        setFileData(file);
        
        if(file){
            const allowedTypes=['image/jpeg','image/png','image/gif'];
            if(allowedTypes.includes(file.type)){

            }
        }
    }


 }


 Redux is a state management library commonly used in react to manage the application's global state in 
 a predictable and centralized manner. 

 REdux creates a single source for your application called as a 'store'. All the application's state is stored in the store 
 making it easy to access and update from any part of the application. 
 Redux allows you to use middlewares to add custom logic, and handle asynchronous actions and more.

 simple example of how a redux works in a react application 

 import {createStore} from 'redux';
 const initialState= {count:0};

 const CounterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count+1};
        case 'DECREMENT':
            return {count: state.count-1};
        default:
            return state;
    }
 };

 const store=createStore(CounterReducer);


 what is a react router ?
 React router is widely used for handling routing and navigation in react applications.
 It allows you to build SPA's with multiple views / multiple pages without requiring a full page refresh.

 import React from 'react'
 import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
 

 function Home(){
    return(
        <div>Home page</div>
    )
 }
 function About(){
    return(
        <div>About page</div>
    )
 }
 function Contact(){
    return(
        <div>Contact page</div>
    )
 }

 function App(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/path">Path</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>

                    <Route path="/contact">
                        <Contact/>
                    </Route>

                    <Route path="">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
 }
 export function App();