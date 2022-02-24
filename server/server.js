var express = require("express");
var app = express();
app.get("/",function (req,res) {
    res.send("hello world");
});
app.listen(2022, ()=> {
    
    console.log("监听中");

});