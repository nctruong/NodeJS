var http 	= require("http");
var express = require("express");
var app = express();

var server = http.createServer(app);
server.listen(3000);

app.get("/",function(req,res){
	//return string
	//res.send("<font color=red>HELLO WORLD</font>");

	//return file html
	res.sendFile(__dirname + "/index.html");
});

app.get("/welcome",function(req,res){
	//return string
	res.send("Welcome");
});

app.get("/sum/:x/:y",function(req,res){
	//return string
	var p1 = req.params.x;
	var p2 = req.params.y;
	p1 = parseInt(p1);
	p2 = parseInt(p2);
	var sum = p1 + p2;
	res.send("Sum = " + sum);
});