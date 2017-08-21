console.log('Loaded!');

var k = document.getElementById('yo');

var moveright = 0;
k.onclick = function moveRight() {
    k = k + 10;
    k.style = k + 'px';
}
