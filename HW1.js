let age = prompt("What is your age ?","18");
if(age >= 18) {
    document.getElementById('allow').innerHTML = '<h4>You are allowed to this website.</h4>'
}
else{
    document.getElementById('allow').innerHTML = '<h4>You are not allowed to this website.</h4>'
}