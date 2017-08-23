console.log('Loaded!');
var button = document.getElementById('counter');
button.onclick = function () {
    //create a Request 
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE){
            // Take Some Action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString(); 
            }
        }
        
};
    //Make the request
    request.open('GET','http://vishalgangwar17.imad.hasura-app.io/counter', true);
    request.send(null);
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