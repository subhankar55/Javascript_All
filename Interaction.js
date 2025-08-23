// This will send some message through modal window while opening an web-page
// It can't return anything
alert("This is a message.")
// This will ask for some value through a modal window
// It return some values of variable
let givename = prompt("Enter your name : ","Guest");
console.log(givename);
// This takes confirmation from user before executing something through a modal window.
// Return some boolean value(true/false).
let deletepost = confirm("Do you really want to delete the post ?");
//console.log(deletepost);
if(deletepost){
    console.log("The post has been deleted successfully.");
}
else{
    console.log("The post has not been deleted.");
}