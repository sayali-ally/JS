class singleton{
    constructor(){
        if(singleton.instance){
            return singleton.instance;
        }
        this.data=[];
        singleton.instance=this;
    }

    additem(item){
        this.data.push(item);
    }
    getData(){
        this.data;
    }
}

const instance1=new singleton();
instance1.additem('item1');

const instance2=new singleton();
instance2.additem('item2');

console.log(instance1===instance2);
console.log(instance1.getData());
console.log(instance2.getData());


class singleton{
    constructor(){
        if(singleton.instance){
            return singleton.instance
        }
        else{
            singleton.instance=this;
        }
        this.data=[];
    }

    additem(item){
        this.data.push(item)
    }
    getData(){
        this.data;
    }
}


class singleton{
    constructor(){
        if(singleton.instance){
            return singleton.instance;
        }
        this.data=[];
        singleton.instance=this;
    }

    additem(item){
        this.data.push(item);
    }
    getData(){
        this.data;
    }
}



class singleton{
    constructor(){
        if(singleton.instance){
            return singleton.instance;
        }
        let data=[];
        singleton.instance=this;
    }

    addData(item){
        this.data.push(item);
    }
    getData(){
        this.data;
    }
}

let instance1= new singleton();
instance1.addData('item1');

let instance2=new singleton();
instance2.addData('item2');

console.log(instance1===instance2);
console.log(instance1.getData());
console.log(instance2.getData());




class singleton{
    constructor(){
        if(singleton.instance){
            return singleton.instance;
        }
        let data=[];
        singleton.instance=this;
    }

    addData(item){
        this.data.push(item);
    }
    getdata(){
        this.data;
    }
}

let instance1=new singleton();
instance1.addData('item1');
let instance2=new singleton();
instance1.addData('item2');
console.log(instance1===instance2);
console.log(instance1.getData());



function outerFunction(){
    const a="this is outer function";

    return innerFunction(){
        console.log(a);
    }
    return innerFunction;
}
const closure=outerFunction();
closure();






class singleton{
    constructor(){
        if(singleton.instance){
            return singleton.instance;
        }

        let data=[];

        singleton.instance=this;
    }

    addItem(item){
        this.data.push(item);
    }
    getData(){
        this.data;
    }
}
let instance1=new singleton();
instance1.additem('item1');

let instance2=new singleton();
instance2.additem('item2');

console.log(instance1===instance2);


function getDouble(arr){
    this.arr=arr;
}
getDouble.prototype.double=function(){
    return this.arr.map(item=>item*2);
}
const arr=new getDouble([1,2,3,4,5]);
arr.double()


function doubleEle(arr){
    this.arr=arr;
  }
  
  doubleEle.prototype.double=function(){
    let res= this.arr.map((item)=>item*2);
    return res;
  }
  
  const arr=new doubleEle([1,2,3,4,5]);
  console.log(arr.double());
  


  class singleton{

  }