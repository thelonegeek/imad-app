var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'articleone' : {
        title: 'Article One',
        heading: 'Article One',
        date: 'Aug 18 2017',
        content: `<p>This is the paragraph tag.</p>
            <p>This is Another paragraph tag.</p>
            <p>This is One more paragraph tag.</p>`
},
    'articletwo' : {
        title: 'Article Two',
        heading: 'Article Two',
        date: 'Aug 20 2017',
        content: `<p>This is the paragraph tag.</p>
            <p>This is Another paragraph tag.</p>
            <p>This is One more paragraph tag.</p>`
},
    'articlethree' : {
        title: 'Article Three',
        heading: 'Article Three',
        date: 'Aug 22 2017',
        content: `<p>This is the paragraph tag.</p>
            <p>This is Another paragraph tag.</p>
            <p>This is One more paragraph tag.</p>`
    }
};

function createtemplate (data){

    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmltemplate =`
    <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div> 
            <a href="/">Home</a>
        </div>
        
        <hr/>
        
        <h3>${heading}</h3>
        
        <div>${date}</div>
        
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req, res){
    // articleName = article-one 
    // articles[articleName] == { content of the object of articles
   var articleName = req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});