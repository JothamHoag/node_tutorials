var express = require('express');
var app = express();

var errorCount = 0;

app.all("/", function (req, res){
    console.log("cool");
    // Force an error
    alksd.si();
});

app.use(function(err, req, res, next){
    console.log("in err function");
    console.log(err.stack);
    errorCount = errorCount + 1;
    res.send("I'm so very sorry this has happened for the " + errorCount + " time.");
});

app.listen(8090);

