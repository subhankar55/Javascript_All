// This file is added in index3.html

let m = Math;
console.log(m);

// Now all the values and functions in Math object will be shown in console
// Taking the help from console as a cheat sheet we can print the constatnt values in math object

console.log("The value of Math.E is ",Math.E);
console.log("The value of Math.PI is ",Math.PI);
console.log("The value of Math.LN2 is ",Math.LN2);
console.log("The value of Math.SQRT1_2 is ",Math.SQRT1_2);
console.log("The value of Math.LOG2E is ",Math.LOG2E);
// Printing the functions from Math object
let a = 34.64534;
let b = 89;

console.log("The value of a and b is ",a,b);
console.log("The value of a and b rounded is ",Math.round(a),Math.round(b));
console.log("3 raised to the power 2 is",Math.pow(3,2));
console.log("Square-root of 36 is ",Math.sqrt(36));
//Floor and ceil value
console.log("Ceil value of 5.7 is ",Math.ceil(5.7));
console.log("Floor value of 5.7 is",Math.floor(5.7));
//Abs function
console.log("Absolute value of -5 is ",Math.abs(-5));
// Trigo functions
console.log("The value of sin(pi/2) is ",Math.sin(Math.PI/2));
//Min-Max 
console.log("Minimum value of 4,5,6 is",Math.min(4,5,6));
console.log("Maximum value of 4,5,6 is",Math.max(4,5,6));
// Random number : give some random number in between 0 and 1
let r = Math.random();
console.log("The random number is ",r);
// Random number b/w a & b = a + (b-a)*Math.random();
let a1 = 1;
let b1 = 100;
let r1_100 = a1 + (b1-a1)*Math.random();
console.log("The random number b/w 1 and 100 is ",r1_100);