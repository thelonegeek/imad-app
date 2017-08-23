console.log('Loaded!');
// clicked button increment value
var button = document.getElementById('counter');

button.onclick = function () {
    //make a request to the counter  endpoint
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XmlHttpRequest.DONE){
            // Take Some Action
            if(request.status === 200){
                var counter = request.responseText;
            }
        }
        // if not done yet do this....
        else{
        }
    };
    // render the value of counter in the correct span
   /* counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); 
   */
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