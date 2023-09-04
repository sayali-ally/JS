Async/ Await in Promises used to handle asynchronous data in js 

function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Data resolved successfully");
        },2000);
    })
}

async function processData(){
    try{
        const data= await fetchData();
        console.log("Data:",data);
    }
    catch(error){
        console.log("Error");
    }
}
processData();



function add(a,b){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
        const sum=a+b;
        res(sum);
       })
    })
}

async function display(){
    try{
        let a=await add(3,4);
        console.log(a)
    }
    catch{

    }
}

function myFunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data);
            if(data){
                console.log("Data fetched");
            }
            else{
                console.log("Error");
            }
        },2000);
    })
}

myFunc()
.then((data)=>{
    console.log("Data:",data);
})
.catch((error)=>{
    console.log("Error");
})




function add(a,b){
    return new Promise((res,rej)=>
    {
        setTimeout(()=>{
            const sum=a+b;
            res(sum);
        },2000)
    })
}

async function processData(){
    try{
        let res=await add(2,5);
        console.log(res);
    }
    catch(error){
        console.log(error)
    }
}

when readability is a concern then use async await 
when concurrent tasks / control flow is concern then use Promises async await is build on top of promises 



function add(a){
    return function(b){
        return a+b;
    }
}

const res=add(3)(5);
console.log(res);

function sum(n){
    if(n===1){
        return 1;
    }
    else{
        return function(x){
            return sum(n-1)(x) + n;
        }
    }

}



function sum(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const sum=a+b;
            res(sum)
        },2000)
    })
}

async function data(){
    try{
        let res=await sum(2,3);
        console.log(res);
    }
    catch{
        console.log(error);
    }
}




console.log(x);
let x;
