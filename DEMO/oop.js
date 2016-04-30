var person = {
	ho : "Nguyen Cong",
	ten: "Truong",
	chaomung: function(){
		console.log("Chao ban " + this.ho + " " + this.ten);
	}
}
person.chaomung();
console.log(person["ten"]);