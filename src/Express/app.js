const express = require("express");
const app = express();
var requestHandler = require("./requestHandlers");

// requestHandler.handleGetRoot();
// app.get("/", requestHandler.handleGetRoot(req, res));

app.get("/temp", (req, resp) => {
console.log("In app.get");

resp.send("Cool");
}
);

app.use('/greetings', require('./greetings'))

app.listen(8080);
console.log("Listening.....");

