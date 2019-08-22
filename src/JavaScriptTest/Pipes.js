var fileSystem = require("fs");

const INPUT_FILE_NAME = "../resources/test_input_file.txt";
const OUTPUT_FILE_NAME = "../resources/test_output_file.txt";

var inputFile =  fileSystem.createReadStream(INPUT_FILE_NAME);

deleteFile(OUTPUT_FILE_NAME);
var outputFile = fileSystem.createWriteStream(OUTPUT_FILE_NAME);

inputFile.pipe(outputFile);

function deleteFile(fileName){
    try{
        require("fs").unlinkSync(fileName);
    } catch (err) {
        console.log("Error deleting file " + fileName);
        console.log(err);
    }
};



