var express = require('express');
var router = express.Router();


router.all("/", function(req, res){
    res.send("welcome to the greetings app");
});
router.get("/hello", function (req, res){
    res.send("hello my friend");
});

module.exports = router;