var fs = require("fs");
var noidung = fs.readFileSync( "./danhsach.txt");
console.log(noidung);
console.log(noidung.toString());


//var buffer = new Buffer("Hello", "utf-8");
//console.log(buffer);
//console.log(buffer.toString());
//console.log(buffer.toJSON());