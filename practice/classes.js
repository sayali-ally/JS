classes in js are a blueprint for creating objects;

class Animal{
    constructor(name){
        this.name=name;
    }

    makeSound(){
        console.log("some generic sound");
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name){
            this.breed=breed;
        }
    }
    makeSound(){
        console.log("dog barks");
    }
}

const dog1=new dog("shiro","labrador");
dog1.makeSound();
console.log(dog1.name);



class Animal{
    constructor(name){
        this.name=name;
    }
    makesSound(){
        console.log("some sound")
    }
}
class Dog extends Animal{
    construtor(name,breed){
        super(props);
        this.breed=breed;
    }
    makeSound(){
        console.log("Dog barks");
    }
}

const dog= new Dog("shiro","labrador");
dog.makeSound();
console.log(dog.name);