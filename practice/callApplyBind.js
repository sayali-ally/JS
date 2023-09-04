var object = new Object();
var object = {
    name: "soham",
    age: 10,
    school: "kjohn"
}

function myFunc(name){
   this.name=name;
   this.age=21;
}
var obj=new myFunc("sayali");

class Person{
    constructor(name){
        this.name=name;
    }
}
var obj= new Person("sayali");




call apply and bind 
call -> arguments are provided individually along with this value 
apply-> arguments are provided as an array along with this value 


example for call 
var emp1={fname: "sayali",lname:"shelke"}
var emp2={fname: "snehal",lname:"shelke"}
function invite(greet1,greet2){
    console.log(greet1+this.fname+this.lname+greet2);
}

invite.call(emp1,"hello","how are you");
invite.call(emp2,"hello","how are you");

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


example for bind 
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




