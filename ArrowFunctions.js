// This file is included in index3.html

function greet(){
    console.log("Good morning");
}
greet();
// The above mentioned function can be implemented in a different way
// Let say the function is 'greeting'
// This is called as arrow functiom
let greeting = ()=>{
    console.log('Good Evening');
}
greeting();
// Some application of arrow function:
// Here a function skeleton is implemented inside the setTimeout function , where we can implement any function program
setTimeout(() => {
    console.log("We are inside SetTime Out");
}, 3000);

// let sum2 = (a , b) =>{
//     return a + b;
// }

// The above mentioned function can be implemented as below:
let sum2 = (a , b) => a + b;
// We can check the result in console
let half = a => a/2;
console.log(half(45));

let greetings = () => console.log('Hello, everyone !');
greetings();

let obj1 = {
    grit : "Good Morning!",
    names : ["Harry" , "Rohan" , "SkillF" , "Djkhiladi"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.grit + "kukdoo koo" + student);
        })
    }
}
obj1.speak();

// This pointer inside an arrow function always indicate the outside object