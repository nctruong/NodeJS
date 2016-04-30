function KhoaHoc(ten,hocphi){
	this.Ten =  ten;
	this.HocPhi = hocphi;
}

// prototype la khai bao phuong thuc cua doi tuong trong nodeJS
KhoaHoc.prototype.mota = function(){
	console.log("Hello "+this.Ten + " " + this.HocPhi);
}

var nodejs = new KhoaHoc("Lap trinh nodejs", 800000);
nodejs.mota();