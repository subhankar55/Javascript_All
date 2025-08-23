//when certain actions come multiple times in a code, instead of copying the code multiple time we make a function and use that function to implement the action multiple times. This increases the re-usability of the code.

//This function return nothing.
function greet(name,greettext){
    let name1 = "Subham"; // its scope is restricted locally.So it can't do any change the globally defined name1.
    console.log(greettext + " " + name);
    console.log(name + " is a good person.");
}

//This function return some value.
function sum(a,b,c){
    let d = a + b + c;
    return d;
    //after return the code access nothing.No lines after return will be executed.
}
let name = "subhankar";
//Globally defined.
let name1 = "Rohan";
let name2 = "Sagar";
let name3 = "Harry";
let greettext = "Good Morning";
greet(name,greettext);
greet(name1,greettext);
greet(name2,greettext);
greet(name3,greettext);
let x = 1;
let y = 2;
let z = 3;
console.log(sum(x,y,z));