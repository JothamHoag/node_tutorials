var fs = require("fs");
const INPUT_FILE_NAME = "../resources/test_input_file.txt"

fs.readFile(INPUT_FILE_NAME, (err, data) => {
    if (err) throw err;

    console.log("File contents from async read:\n" + data.toString());
});

var data = fs.readFileSync(INPUT_FILE_NAME);
console.log("File contents from sync read: \n" +data);

