// KIEU GOI HAM THU NHAT
function tinhTong(a,b){
	return a+b;
}
var x = tinhTong(5,3);
console.log("Type 1. Sum: " + x);
// KIEU GOI HAM THU 2
function hello(){
	console.log("Type 2th");
}
function goiHam(fn){
	fn();
}
goiHam(hello);
// KIEU GOI HAM THU BA
var sum = function(){
	console.log("Type 3th");
}
sum();