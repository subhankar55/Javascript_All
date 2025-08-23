console.log("This is Javascript tutorial.");
// This is a for loop.
let i = 0;
for(i = 0; i < 5; i++){
    console.log(i);
}

let friends = ["Sanjiv","Deepti","Puja","Rahul","Arif","John"];
for (let index = 0; index < friends.length; index++) {
    console.log("Hello friend!" + friends[index]); 
}

// Modern Javascript version of the old for loop format

friends.forEach(function f(element){
    console.log("Hello friend!" + element + "welcome to modern Javascript!");
});

// Another modern method of 'for' iteration
for(element of friends){
    console.log("Hello friend!" + element + "welcome to modern Javascript again!");
}

let Employee = {
    name : "Subhankar",
    salary : 30,
    chaneel : "ABC"
}

// To iterate over object in js
for(key in Employee){
    console.log(`The ${key} of employee is ${Employee[key]}`);
}

//while loop in js
let j = 0;
while(j < 4){
    console.log(`${j} is lesser than 4.`);
    j++;
}

//Implementation of do-while loop.
do{
    console.log(`${j} is lesser than 5.`);
    j++;
} while(j < 4);