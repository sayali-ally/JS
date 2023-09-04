let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because the variable in if block won't exist here)



let c=1;
switch(x){
    case 0:{
        let name;
        break;
    }

    case 1:{
        let name;
        break;
    }
}

temporal dead zone:
declaring variables only with let/const 

IIFE ( Immediately invoked function expression)
it is js function that runs as soon as it is defined

(function (){
    //logic here 
})();

(function (){
var msg="Iife";
console.log(msg);
})();
console.log(msg); // Error: msg is not defined 


(function(){

})();


Decode or encode a url in js
encode using encodeURI();
decode using decodeURI();

let url="anyurl1234322ajsldk";
let encodedUrl=encodeURI(url);
let decodedUrl=decodeURI(url);


