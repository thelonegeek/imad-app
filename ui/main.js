console.log('Loaded!');

// clicked button increment value
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //make a request to the counter  endpoint
    
    //capture the response and store it in a variable
    
    // render the value of counter in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
//animation on the picture 
var img = document.getElementById('yo');
margin = 0;
function moveRight(){
    margin = margin + 5;
    img.style.marginLeft = margin + 'px';}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};