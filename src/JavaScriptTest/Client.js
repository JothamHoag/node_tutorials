var http = require('http');

var httpCall = {
    host: '127.0.0.1',
    port: '8081',
    path: '/filenameToEcho'
};

var httpResponseHandler =
    function(response){
        var responseData = "";
        response.on('data', function(dataReturnedFromHttpCall){
            responseData += dataReturnedFromHttpCall;
        });

        response.on('end', function(){
            console.log(responseData);
        })

    };

var httpReq = http.request(httpCall, httpResponseHandler);
httpReq.end();

