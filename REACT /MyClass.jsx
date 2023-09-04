import React from 'react';
import App from './App';
//Class based Components ;
class MyClass extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to simplilearn'
    };
    this.OnButtonPress = this.OnButtonPress.bind(this);
  }

  OnButtonPress() {
    this.setState({
      message: 'The best place to learn'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.OnButtonPress}>Click me!</button>
      </div>
    );
  }
}

export default MyClass;



class MyClass extends React.Component{
  constructor(){
    super(){
      this.state={
        message:"welcome to my channel"
      };
    }
  }
  handleChane=()=>{
    this.setState({
      message:"best place to learn"
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleChange}>Click me!</button>
      </div>
    )
  }
}


class myClass extends React.Component{
  constructor(){
    super();
    state={
      message:"the inital message"
    }
  }

  changeMessage(){
    this.setState(prevState=>{
      return {message:"this is the new message"}
    })
  }
}