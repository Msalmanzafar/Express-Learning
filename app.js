var express = require("express");


var app = express();

var port = (process.env.PORT || 3000);

app.get("/", function(req, res, next){
    console.log("request is comming to '/");
    res.send("hello Word");
});
app.get("/home", function(req, res, next){
    console.log("request home is comming to '/");
    res.send("this is my home page..");
});

app.listen(port, function(){
    console.log("app is runnig on port", 3000);
});