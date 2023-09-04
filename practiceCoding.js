reverse string 

function reverse(str){
    let res='';
    for(let i=str.length-1;i>=0;i--){
        res+=str[i];
    }
    return res;
}

return str.split("").reverse().join('');

return str.split("").reverse().join('');



check for palindrome

function isP(str){
    return str==reverse(str);
}



factorial calculation 


7!= 1*2*3*4*5*6*7

function fact(num){
    const ans=1;
    for(let i=1;i<=num;i++){
        ans*=i;
    }
    return ans;
}

function fact(n){
    if(n==0 || n==1)
    return n;
    return n*fact(n-1);
}


function findMax(arr){
    return Math.max(..arr);
}


remove duplicates from Array

function removeDuplicates(arr){
    return [..new Set(arr)];
}


fibonacci Series

0 1 1 2 3 5 8 13 21
function fib(n){
    if(n==0 || n==1)
    return n;
    return fib(n-1)+fib(n-2);
}


find common elements 
function commonEle(arr1,arr2){
    return arr1.filter(item=>arr2.includes(item));
}

function commonEle(arr1,arr2){
    return arr1.filter(item=>arr2.includes(item));
}
check prime number 
function isPrime(num){
    if(n<=1)
    return false;

    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0)
        return false;
    }
    return true;
}

function isPrime(num){
    if(n<=1)
    return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(n%i==0)
        return false;
    }
    return true;
}

anagram check
function isanagram(str1,str2){
    const s1=str1.split('').sort().join('');
    const s2=str2.split('').sort().join('');
    return s1===s2;
}

const str=str.split("").sort().join('');
function isanagram(str1,str2){
    const s1=str1.split("").sort().join("");
    const s2=str2.split("").sort().join("");
    return s1===s2;
}

find missing number 

function missingNumber(arr){
    const n=arr.length+1;
    const exp=n*(n+1)/2;
    const act=arr.reduce((acc,curr)=>acc+curr,0);
    return exp-act;
}


find longest word in sentence 

function longestWord(str){
    const arr=str.split('');
    let longestLength=0;
    let longestWord='';

    for( word in arr){
        if(word.length>longestLength){
            longestLength=word.length;
            longestWord=word;
        }
    }
    return longestWord;
}


