call is a built-in function -> which invokes a function and explicitly specifies the value of this with that function 

const person={
    fn:"jhon",
    ln:"doe"
};

function greet(message){
    console.log(`${message}, ${this.fn} ${this.ln} `);
}

greet.call(person,"hello");



apply: it is a build-in function similar to call which invokes a function and explicity specifies the value of
 this within that fucntion 

apply method accepts an array 

example for apply
    var emp1 =
    {
        fname: "sayali",
        lname:"shelke"
    }

function greet(message1,message2){
    console.log(message1+this.fname+this.lname+message2);
}
greet.apply(emp1,["hello","how are you?"]);



Bind in js 

var emp1 =
{
    fname: "sayali",
    lname:"shelke"
}

function greet(msg1){
    console.log(msg1+this.fname+this.lname);
}

const emp2=greet.bind(emp1,"hello");
emp2();


call 

var emp1={
    fname:"sayali";
    lname:"shelke";
}

function greet(message){
    
}
greet.call(emp1,"hello");





var emp1={
    fname: this.fname,
    lname: this.lname
}
function greet(message){
    console.log(`${this.message}, ${this.fname} ${this.lname}`);
}

greet.call(emp1,"hello");
greet.apply(emp1,["hello"]);



var emp1={
    fname: "jhon",
    lname: "doe"
}
function greet(message){
    console.log(`${message}, ${this.fname} ${this.lname}`)
}

const emp2=greet.bind(emp1,"hello");
emp2();

var emp1={
    
}