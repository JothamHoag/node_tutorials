var http = require("http");

var httpHandler =     function (request, response) {
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.end("Yup\n");

};

http.createServer( httpHandler
    // function (request, response) {
    //     response.writeHead(200,{'Content-Type' : 'text/plain'});
    //     response.end("Yup\n");
    //
    // }
).listen(8081)

console.log("Yup is running on http://127.0.0.1:8081/");
