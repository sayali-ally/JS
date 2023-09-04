how to add states in a function component -> create hoooks (useState)

and in class based components -> use this.state 

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand: 'BMW',
            color: 'black'
        }
    }
//how to update the state of the object 
    changeColor(){
        this.setState(prevState=>{
            return {color:'red'}
        });
    }
}


class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand: 'BMW',
            color: 'black'
        }
    }

    changeColor(){
        this.setState(prevState=>{
            return {color: 'red'}
        });
    }
}




class Car extends React.Component{
    constructor(props){
        super(props){
            this.state={
                brand:'BMW',
                color:'black'
            }
        }
    }

    changeColor(){
        this.setState(prevState=>{
            return {color:'red'}
        });
    }
}



class Car extends React.Component{
    constructor(props){
        super(props){
            this.state={
                brand:'BMW',
                color:'black'
            }
        }
    }

    changeColor(){
        this.setState(prevState=>{
            return {color:'red'}
        });
    }
}


class Car extends React.Component{
    constructor(props){
        super(props){
            this.state={
                brand: 'BMW',
                color:'black'
            }
        }
    }
    changeColor(){
        this.setState(prevState=>{
            return {color:'red'}
        });
    }
}

class car extends React.Component{
    constructor(props){
        super(props){
            this.state={
                brand:"bmw",
                color:"black"
            }
        }
    }

    changeColor(){
        this.setState(prevState=>{
            return {color:"red"}
        });
    }
}



class car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:"black",
            brand:'bmw'
        }
    }

    changeColor(){
        this.setState(prevState=>{
            return {color:"red"}
        })
    }
}