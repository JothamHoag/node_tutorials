var http = require("http");



var httpHandler = function (request, response){
    console.log("In httpHandler");

    var url = require('url');

    var pathName = url.parse(request.url).pathname;
    console.log(pathName);

    response.write("Requested File Name: " + pathName);
    response.end();


};

http.createServer(httpHandler).listen(8081);
