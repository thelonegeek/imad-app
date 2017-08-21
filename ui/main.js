console.log('Loaded!');

var img = document.getElementById('yo');

margin = 0;
function moveRight(){
    margin = margin + 5;
    img.style.marginLeft = margin + 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};
