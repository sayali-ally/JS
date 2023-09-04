// how to create a cookie in js
// what is a cookie ? 
// A small data that the website keeps a track of our activities to recommend us.
function setcookie(name,value,date){

    document.cookie=name+"="+value+date;
}

setcookie("username","johndoe",7);

//creates a cookie with username as johndoe7 expires in 7 days