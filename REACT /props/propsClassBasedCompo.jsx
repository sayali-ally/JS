import Child from "../Child";


class Parent extends React.Component{
    render(){
        return <Child message="Hello from parent"/>
    }
}

class Child extends React.Component{
    render(){
        return(
            <div>{this.props.message}</div>
        )
    }
}