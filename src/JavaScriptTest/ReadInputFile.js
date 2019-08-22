var fs = require("fs");

var fileName = "../resources/test_input_file.txt";

var data =  fs.readFileSync(fileName);
console.log("sync contents of " + fileName + " = \n" + data.toString());

// Async file read
fs.readFile(fileName,
    function(err, data){
    console.log("err = " + err)
        console.log("async contents of " + fileName + " = \n" + data.toString());
   }
);


console.log("Done");