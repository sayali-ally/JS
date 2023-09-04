reverse a string 


function reverse(str){
    let res=""
    for(let i=str.length;i>=0;i--){
        res+=str[i];
    }
    return res;
}
function reverse(str){
    return str.split("").reverse().join("");
}

