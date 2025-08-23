//added to intex3.html

// after 'on' when we write any event name and then assign some function to it , then during occurrance of that event our function will run

function toggleHide(){
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display != 'none') para.style.display = 'none';
    else para.style.display = 'block';
}

// List of Events

// click
//     contextmenu
//     mouseover/mouseout
//     mousedown/mouseup
//     mousemove

//     submit
//     focus
let para = document.getElementById('para');

// Event Listener Structure
// This way using an event listener we can run any function corresponding to any particular event
para.addEventListener('mouseover',function run(){
    alert('Mouse Inside');
});

// when an id is assigned to a document then we can use the document just using their id without creating any variable using this id.