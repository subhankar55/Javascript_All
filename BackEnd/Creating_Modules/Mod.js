console.log("This is Module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

// When we export the function only the, while importing , container will get the function only to be useful
// When we export the all necessary functions and variables as an object in the form of a class then we can access various functions and variables using '.' operator

module.exports = {
    average : average
}

// module.exports itself is an object, so we can export even a particular variable of a class also using dot operator like this >

// module.exports.name = "Harry";