console.log('Loaded!');

var img = document.getElementById('yo');

margin = 0;
function moveRight(){
    margin = margin + 5;
    img.style.margin = margin + 'px';
}

img.onclick = function () {
    var interval = setInvterval(moveRight, 50);
};
