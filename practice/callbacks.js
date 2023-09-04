

function multiplyBy2(int sum){
    console.log(sum*2);
}
function  add(int a,int b,operation){
    var sum = a+b;
    operation(sum);
}
add(2,3,multiplyBy2);



function multiplyBy2(a){
    return a*2;
}

function add(a,b,operation){
    var sum=a+b;
    operation(sum);
}
add(2,4,multiplyBy2);


callbacks are function which are passed as arguments to other functions and are intended to be executed later 




function add(a,b,operation){
    const sum=a+b;
    operation(sum);
}

function display(data){
    console.log(data)
}
add(2,3,display);




function add(a,b,operation){
    const sum=a+b;
    operation(sum);
}

function display(res){
    console.log(res);
}

add(2,3,display);