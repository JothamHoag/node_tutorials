var express = require('src/JavaScriptTest/Express');

var app = express();



app.get('/', (req, res) => {
    console.log('Processing GET');
    res.send("Success");
});


var httpServer = app.listen(8081, () => {
    serverStartup(httpServer);
});

var serverStartup =
    function(server){
        console.log("url: " + server.address().address);
        console.log("port: " + server.address().port);
    };
