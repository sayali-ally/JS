import React, { useState } from 'react';
import App from './App';
const OnChangeFunction = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return
    <input type="text" value={value} onChange={handleChange}></input>
}
export default OnChangeFunction;

//OnChange event 



const MyFunction=()=>{
  const [value,setValue]=useState('');

  const handleChange=(e)=>{
    setValue(e.target.value);
  };

  return(
    <input type="text" value={value} onChange={handleChange}></input>
  )
}
export default MyFunction;