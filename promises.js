function fetchData(){
    return new Promise((res,rej)={
        setTimeout(()=>{
            const data='Sample data';

            if(data){
                res(data);
            }
            else{
                rej('Error: Unable to fetch data');
            }
        },2000);
    })
}

fetchData()
.then((data)=>{
    console.log('Data:',data);
})
.catch((error)=>{
    console.error(error);
});

Promises are used to handle asynchronous behavior 


function myFunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const data="sample data";

            if(data)
            res(data);

            else
            rej('error');
        },1000);
    })
}

myFunc()
.then((data)=>{
    console.log('Data:',data);
})
.catch((error)=>{
    console.error(error);
});



function myFunc(a,b){
    return new Promise((res,rej)=>{
        const sum=a+b;
        res(sum);
    })
}
myFunc(2,5)
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
})



function add(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const sum=a+b;
            res(sum);
        },1000)
    })
}
add(2,3)
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

setTimeout(() => {
    
}, timeout);


setTimeout(()=>{

},1000)


function add(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const sum=a+b;
            res(sum)
        })
    })
}

add(2,3)
.then((res)=>{
    console.log(res)
})
.catch()