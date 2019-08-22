var express = require('express');
var app = express();



// set directory of template views
app.set('views', './view_templates');

// set  the view engine to jade  aka pug
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.send(generateResponse({title: "about me", message: 'not much to say'}));
});

app.listen(8090);

function generateResponse(values){
    const pug = require('pug');
    const helloTemplate = pug.compileFile("./pug_templates/hello.pug");

    return helloTemplate({title: "about me", message: 'not much to say'});
}

