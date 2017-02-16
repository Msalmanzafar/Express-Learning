// var express = require("express");
// var mongoose = require("mongoose");


// var app = express();

// var port = (process.env.PORT || 3000);

// app.get("/", function(req, res, next){
//     console.log("request is comming to '/");
//     res.send("hello Word");
// });
// app.get("/home", function(req, res, next){
//     console.log("request home is comming to '/");
//     res.send("this is my home page..");
// });
// mongoose.connect("mongodb://salman:2926959@ds145369.mlab.com:45369/sky-school");
// mongoose.connection.once('open', function(){
//     console.log("server connected");
// })

// app.listen(port, function(){
//     console.log("app is runnig on port", 3000);
// });

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json())
app.use(cors());
var studentSchema = new mongoose.Schema({
    name: String
})

var studentModel = mongoose.model("students", studentSchema);

app.get("/get", function (req, res, next) {
    studentModel.find({}, function (err, data) {
        if (!err) {
            console.log(data)
            res.send(data)
        }
        else {
            console.log("Error")
        }
    })

})
app.post("/post",function(req,res,next)
{
    var newAdd = new studentModel({
        name: req.body.name
    })
    newAdd.save(function(err,data)
    {
        if(!err)
        {
            console.log("Saved");
        }
        else
        {
            console.log("Error");
        }
    });
})

var port = (process.env.PORT || 3000)
mongoose.connect('mongodb://salman:2926959@ds145369.mlab.com:45369/sky-school');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Connected");
});


app.listen(port, () => {
    console.log("Server Running At http://localhost:" + port);
});