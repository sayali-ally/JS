import React from "react";
import "./App.css";
import MyForm from './MyForm';
import MyColor from "./MyColor";
import Counter from "./Counter";
import MyCar from "./MyCar";
import MyClass from "./MyClass";
import Parent from "./Parent";
import Child from "./Child";
import Appi from "./Appi";
import Simple from "./Simple";
import OnChange from "./OnChange";

function App() {
  return (
        <div>
            <MyForm/>
            <MyColor/>
            <Counter/>
            <MyCar/>
            <MyClass/>
            <Parent/>
            <Appi/>
            <OnChange/>
        </div>
  );
}

export default App;
