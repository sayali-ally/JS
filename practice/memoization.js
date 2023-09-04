function add(num){
    return num+2;
}
add(2);
add(2);

function add(num){
    var cache={};
    return function(num){
        if(num in cache){
            return cache[num];
            console.log("cache hit");
        }
        else{
            cache[num]=num+2;
            console.log("cache miss");
            return cache[num]; 
        }
    }
}


function add(num){
    return num+2;
}

function memoize(num){
    let cache={};
    return function(num){
        if(num in cache){
            return cache[num];
            console.log("cache hit")
        }
        else{
            cache[num]=num+2;
            return cache[num];
        }
    }
}
console.log(memoize(4))