var string="My ";
console.log(string);
//Both single quote (' ') and double quote(" ") are allowed.
var st='that';
console.log(st);
var add="name is ";
var name="Subhankar Maiti";
console.log(string + add + name);
var degree=" is persuing BTech.";

//with `` this sign confusion of single and double quote is removed.
var temp=`${name} is a 'good' "student". He${degree}`;
console.log(temp);
//we can determine the length of the string using length function
var len = name.length;
console.log(`Length of name is ${len}.`);

//There are so many escape sequence character in javascript

console.log("Greet anybody with Hello\\Namaste.\nGive them tea and biscuits\b\tInvite for meeting.");
var y=new String("this");
console.log(y);
document.getElementById('content').innerHTML = '<h3> this an h3 heading</h3>';