// This file is included to index3.html file
let jsonObj = {
    name : "Harry",
    channel : "CWH",
    friend : "Rohan Das",
    food : "Bhindi"
}
console.log(jsonObj);
// To send any object through network we need to stringify our object to send easily . For that purpose we use JSON 
let myjsonStr = JSON.stringify(jsonObj);
console.log(myjsonStr);
// Now we can do changes , we can update the string and can apply all operations applicable for string
myjsonStr = myjsonStr.replace("Harry","Larry");
console.log(myjsonStr);
// We can convert a json string to a JavaScript object also
let newJsonObj = JSON.parse(myjsonStr);
console.log(newJsonObj);