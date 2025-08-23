// This file is included in index3.html
console.log("This is Date and Time tutorial");

// This will initialize a complete new date and the date will be current date
let now = new Date();
console.log(now);

// This will initialize a default very old date as a referenece & the argument given in the Date function will increment the date as many mili-seconds as mentioned

let dt = new Date(0);
console.log(dt);

// This will show the mentioned date.
let newDate = new Date("2029-09-30");
console.log(newDate);

// let newDate = new Date(year, month , date , hours, minutes, seconds, miliseconds);

let newD = new Date(3020, 4, 6, 9 , 2 , 34 , 100);
console.log(newD);

// we can access almost all the values in the argument by using various functions

let yr = newD.getFullYear();
console.log("The year is ", yr);

let dtt = newD.getDate();
console.log("This date is ", dtt);

let month = newD.getMonth();
console.log("The month is ", month);

let hr = newD.getHours();
console.log("The hour is ", hr);

// We can change the values of the argument by using set type function

// These types of function can auto-correct the argument values , if set wrongly , e.g. - 32 date will be set as next month 1st day for 31 dated month 
newD.setDate(5);
console.log(newD);

// we can set other parameters also

console.log(Date.now());