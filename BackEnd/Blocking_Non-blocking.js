// Synchronous or blocking 
// Line by line execution guranteed.

// Asynchronous or Non-blocking
// Line by line execution not guranteed 


// Implementation of asynchronous program
const fs = require("fs");
fs.readFile("dele.txt","utf-8",(error , data) =>{ // Call-back function
    console.log(error , data);
});
// While reading the file the program will not wait till the end of the reading, program will execute the next line. When the file will be read completely the call back function will be called then.
console.log("This is a message");
