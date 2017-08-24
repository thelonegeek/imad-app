function exec(){
    // CREATE THE REQUEST
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
    //MAKE THE REQUEST 
    request.open("GET", "http://vishalgangwar17.imad.hasura-app.io/counter", true);
    request.send(); 
    console.log('EXECUTED');
}
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_button');
submit.onclick = function(){
    
    var names = ['name1','name2','name3', 'name4'];
    var list = '';
    for( var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    //CAPTURE A LIST OF NAME AND RENDER IT AS LIST
};