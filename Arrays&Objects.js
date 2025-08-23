let myvar = null;
let myvar2 = undefined;
console.log(myvar);
console.log(myvar2);
//we can create objects to store multiple kinds of data

let employee = {
    name : "Subhankar Maiti.",
    Age : 21,
    college : "NIT Durgapur.",
    year : "2nd",
}
console.log(employee);
//array is a kind of object already built

let names = [1,2,4,"Maiti",undefined];
console.log(names);
console.log(names[1]);

//we can create an object using 'new' keyword
//code : new Array (1,2,3,"Harry","Maiti");
//array is already a built-in object
console.log(names.length);
names.push("This is pushed.");
names = names.sort();
console.log(names);

//if we want to give space b/w to letter of a property keyword we need to declare the property as a string inside ""
// when we shall go to access the property in a web page we need write it object['propert y'] -- in this way (space indicate the proper place of the space)
//if we don't give this space we can access it as object.property or object['property'] in both the way

// if we declare let names = new Array(23) then the digit(here 23) in the argument indicates the size of the array.