// This file included in index3.html

console.log("This is a Tutorial");

// setTimeout --> allows us to run the function once after the interval of time.
//setInterval --> allows us to run the function repeatedly after the interval of time.

function greet(name, byeText){
    console.log("Hello!Good Morning." + name + " " + byeText);
}

//1st argument tells the function and 2nd argument tells the time in mili seconds.

//only function name inside the argument. No function call using parentheses.
 timeOut = setTimeout(greet,5000,"Harry","Goodbye!");
 // This method set some unique ID to this setTimeout call
 console.log(timeOut);

 //Now using clearTimeout call we can clear the time set for the function call.

 clearTimeout(timeOut);

 // This will call the function repeatedly after the set inteval
// This will return some intervalID

 intervalID = setInterval(greet,1000,"Harry","GoodBye!");

 //Now clear interval by intervalID

 clearInterval(intervalID);

// by this we can create a  clock easily

 function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
 }
 setInterval(displayTime, 1000);