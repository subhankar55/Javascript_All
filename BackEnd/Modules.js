// We need to fetch the module we want to use
const fs = require("fs");

//Read a file
let text = fs.readFileSync("dele.txt","utf-8");
//Update the file
text = text.replace("browser","Rohan");

console.log("The content of the file is");
//Content of the updated file
console.log(text);
//New file creation (Write)
console.log("Creating a new file...");
fs.writeFileSync("rohan.text",text);