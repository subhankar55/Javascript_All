var str="This is a string.";
console.log(str);
//Uses of various string function.

//First occurence of a subString
var position=str.indexOf('is');
console.log(position);
//Last occurence of a subString
position=str.lastIndexOf('is');
console.log(position);
//Substring from a string
//Takes all kind of values in argument
var substr=str.slice(1,6);
console.log(substr);
//Only difference is negative values are not allowed in argument
var substr=str.substring(1,7);
console.log(substr);
//Here 2nd value of the argument indicates the size of the sub-string and 1st indicates the starting index
var substr1=str.substr(1,3);
console.log(substr1);

//replace
//Replacement will not occur in str variable it will be stored in the replaced variable
var replaced = str.replace('string','Maiti');
console.log(str);
console.log(replaced);

//To lowercase and to uppercase converter
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//To concat
//We can add to string using + as well as concat function
var newString = str.concat(' New string');
console.log(newString);

//To trim starting and ending whitespaces
var strWhitespace = '     this string     contain whitespaces    ';
console.log(strWhitespace);
console.log(strWhitespace.trim());

//To get character at a certain position 
var char2 = str.charAt(2);
console.log(char2);

var ch = str.charCodeAt(2);//Not VVI for Web for beginner
console.log(ch);