var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"application/json"});
	//res.writeHead(200,{"Content-Type":"text/html"});
	//var data = fs.readFileSync("./index.html", "utf-8");
	//data = data.replace("{name}","TRUONG NGUYEN")
	//res.end(data);
	//fs.createReadStream("./index.html").pipe(res);

	var obj = {
		ho	: "Nguyen",
		ten	: "Truonhg",
		namsinh : 1990
	}

	res.end(JSON.stringify(obj));
}).listen(7777);