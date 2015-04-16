var func = require("./function.js");

function ass(message, result){
	if(message){
	console.log(result + " ok");
	}else{
	console.log(result + " failed");
	}
}

function test_of_add(){
	var sum = func.add(2, 3);
	ass(sum = 5, 'add');
}	

function test_of_sub(){
	var diff = func.sub(4,2);
	ass(diff = 2, 'sub');
}

function test_of_mul(){
	var mult = func.mul(2,5);
	ass(mult = 10, 'mul');
	}

function test_of_div(){
	var dive = func.div(4, 2);
	ass(dive = 4, 'div');
}

exports.test_of_mul = test_of_mul;
exports.test_of_add = test_of_add;
exports.test_of_div = test_of_div;
exports.test_of_sub = test_of_sub;