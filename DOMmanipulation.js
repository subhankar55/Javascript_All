let main = document.getElementById('main');
console.log(main);
// We can access the html document in this way
let nav = document.getElementById('nav');
console.log(nav);
// After getting access we can change or do manipulations in this way
//nav.innerHTML = "<li>Dynamic element</li>"

// We can get access a document by its class also
// If more than one documents are assigned to a same class then documents are stored inside the variable like an array 
let container = document.getElementsByClassName('container');
console.log(container);

// This 'queryselector' selects the first element of the document array
let sel = document.querySelector('.container');
console.log("Selector returns ", sel);
// If we use 'queryselectorAll' then not only 1st element but also all other elements will be selected which have tha same mentioned selector

// We can use all other selectors like #nav(# indicates id)
// we can use selectors like #nav>ul (it means ul is the direct child of #nav and this will be our selector)
let select = document.querySelectorAll('#nav>li');
console.log("Selector returns ",select);