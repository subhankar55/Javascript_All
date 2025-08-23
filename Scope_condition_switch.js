var string1="This is a string.";
console.log(string1);
var string2 ="This is the 2nd string.";
console.log(string2);
//Scope of 'var' is global.So redefinition of a variable with 'var' doesn't throw any error

//Where as 'let' definition of a variable is not global.If it is declared inside a block then scope of this variable is restricted in this block.

let a='u';

{
    let a='u6';
    console.log(a);
}
console.log(a);
//It is advised to use 'let' mostly now onwards

// Const is a constant container which can never be changed.

const b = "This is constant.";
console.log(b);

//Conditions
let age = 5;
if(age>18) {
    console.log("You can drink cold drinks");
}
else if(age==2){
    console.log("Your age is 2.");
}
else if(age==5){
    console.log("Your age is 5.");
}
else {
    console.log("You can drink dinking water.");
}

//Switch-Case
const cups = 4;
//inside the argument of switch we can have a string instead of an integer data.
switch (cups) {
    case 4:
        console.log("The value of cups is 4");
        break;
    case 41:
        console.log("The value of cups is 41");
        break;
    case 42:
        console.log("The value of cups is 42");
        break;    
    case 43:
        console.log("The value of cups is 43");
        break;
    default:
        console.log("The value of cups is none of the 4,41,42,43");
        break;
}