var express = require('express');
var app = express();

var middlewareFunction =
    function (req, res, next){
        console.log('Yup');
        res.send('done');
        next();
};

app.use(middlewareFunction);

app.get('/hello', middlewareFunction);

app.listen(8090);