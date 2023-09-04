what are modules?

Modules refer to small units of independent, reusable code and also act 
as the foundation of many JavaScript design patterns. 
Most of the JavaScript modules export an object literal, a function, or a constructor

Maintainability
Reusability
Namespacing


What is scope in javascript
Scope is the accessibility of variables, functions, and objects in
 some particular part of your code during runtime.

 What is a service worker
 A Service worker is basically a script (JavaScript file) that runs in the background, 
 separate from a web page and provides features that don't need a web page or user interaction

 How do you manipulate DOM using a service worker
 Service worker can't access the DOM directly. But it can communicate with the pages 
 it controls by responding to messages sent via the postMessage


 function memoizedAdd2(){
    var cache={};
    return function(num){
        if(num in cache){
            console.log("cache hit");
            return cache[num];
        }
        else{
            cache[num]=num+2;
            return cache[num];
        }
    }
 }
var res=memoizedAdd2();
res(2); normal return 
res(2); cached return 



function memoizedAdd2(){
    var cache={};
    return function(num){
        if(num in cache){
            return cache[num];
            console.log("cache hit");
        }
        else{
            cache[num]=num+2;
            return cache[num];
        }
    }
}

var res=memoizedAdd2();
res(2);   -> normal
res(2);   -> cached return
 