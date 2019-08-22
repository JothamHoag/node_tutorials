var express = require('express')
var app = express();

// directories to  look in for static file requests. Go in order.
// The following will get current version of file if one exists.
// Otherwise, it will get the archived version.
// And, the archived version can be directly retrieved by requesting archive path in the url.
app.all("/", function(req, res){
    res.send("do something original");
    req.getn
});
app.use(express.static('./static_files'));
app.use(express.static('./archived_static_files'));
app.use('/archived', express.static('./archived_static_files'));

app.listen(8090);