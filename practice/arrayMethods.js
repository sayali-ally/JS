Json -> representing data into an object format 


data is an object , with the help of stringify we are converting native object into a string 
JSON.stringify(data);


array methods/properties : slice, splice, filter, map, reduce, set 



1. SLICE
let arr=[1,2,3,4,5,6,7,8,9,10];
let ans=arr.slice(0,2);      ans- 1,2     we exclude the last element 
let ans=arr.slice(2,3);      ans-3

returns subset as a new array 


2. SPLICE 
let arr=[1,2,3,4,5,6,7,8,9,10];
let ans=arr.splice(2,3)  

removes 3 elements after 2nd position 
ans=>[3,4,5]

3. FILTER 
let arr=[1,2,3,4,5,6,7,8,9,10];
let ans=arr.filter((num)=>num%2==0)
console.log(ans);

let con=arr.filter((num)=>num>=3)
console.log(con);

4. MAP
let arr=[1,2,3,4,5,6,7,8,9,10];
let ans=arr.map((item)=>item*2);
console.log(ans);

5. REDUCE
const arr=[1,2,3,4,5,6];
const sum=arr.reduce((accumulate,curr)=>accumulate+curr,0);
console.log(sum);

6. SET
const arr=[1,2,3,4,4,5,6,7,7,8];
cons ans=[...new Set(arr)];
console.log(ans);


const arr=[1,2,3,4,5,6,7,8];
const sum=arr.reduce((accumulate,curr)=>accumulate+curr,0);
console.log(sum);

const arr=[1,2,3,4,4,5,6];
const ans=[...new Set(arr)];
console.log(ans);


const arr=[1,2,3,4,5,6];
const newArr=[...sew Set(arr)];



let ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

function flattenObject(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            flattenObject(obj[key], parentKey + key + '.', result);
        } else {
            result[parentKey + key] = obj[key];
        }
    }
    return result;
}

const flattenedOb = flattenObject(ob);
console.log(flattenedOb);

output:
{
    Company: 'GeeksforGeeks',
    Address: 'Noida',
    contact: -999999908,
    'mentor.HTML': 'GFG',
    'mentor.CSS': 'GFG',
    'mentor.JavaScript': 'GFG'
  }


function flattenObj(obj,parentKey='',res={}){
    for(const key in obj){
        if(typeof obj[key]==='object'){
            flattenObj(obj[key],parentKey+key+'.',res);
        }
        else{
            res[parentKey+key]=obj[key];
        }
    }
    return res;
}
const flattenedOb = flattenObj(obj);
console.log(flattenedObj);


  

function flattenObj(obj,parentKey='',res={}){
    for(const key in obj){
        if(typeof obj[key]==='object'){
            flattenObj(obj[key],parentKey+key+'.',res)
        }
        else{
            res[parentKey+key]=obj[key];
        }
    }
    return res;
}
const flattenedObj=flattenObj(obj);
console.log(flattenedOb)


let ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

