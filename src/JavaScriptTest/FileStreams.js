var fs = require("fs");

const FS_DATA_EVENT = "data";
const FS_END_EVENT = "end";
const FS_ERROR_EVENT = "error";
const FS_FINISH_EVENT = "finish";
const ENCODING = 'UTF8';

var fileName = "../resources/test_io_file.txt";
var fileContents = "";
var fileWriter = fs.createWriteStream(fileName);

fileWriter.write("Contents written by File writer\n", ENCODING);
for (var i = 1; i < 2; i++){
    fileWriter.write("Line " + i + "\n", ENCODING);
}
// fileWriter.close();

var dataStream = fs.createReadStream(fileName);

var fsDataHandler =
    function(chunk){
        console.log("Enter Data Handler");
        console.log("Reading following chunk from file: " + chunk);
        fileContents += chunk;
    };

var fsErrorHandler =
    function(err){
        console.log("Enter Error Handler");
        console.log(err.stack);
    };

var fsFinishHandler =
    function(){
        console.log("Enter Finish Handler");
        console.log("EOF reached");
    };

var fsEndHandler =
    function(){
        console.log("Enter End Handler");
        console.log("File Contents:");
        console.log(fileContents);
    }
dataStream.setEncoding(ENCODING);
dataStream.on(FS_DATA_EVENT, fsDataHandler);
dataStream.on(FS_END_EVENT, fsEndHandler);
dataStream.on(FS_ERROR_EVENT, fsErrorHandler);
dataStream.on(FS_FINISH_EVENT, fsFinishHandler);

console.log("Goodbye");

