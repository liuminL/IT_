function ass(message, result){
	if(message){
	console.log(result + "ok");
	}else{
	console.log(result + "failed");
	}
}



function add(a,b){
	return a+b;
}

function sub(a,b){
	return a-b;
}

function test_of_add(){
	var sum = add(2, 3);
	if(sum == 5){
		console.log("add ok");
	}
	else{
	console.log("add failed");
	}
}

function test_of_sub(){
	var diff = sub(4,2);
	if(diff == 2){
		console.log("sub ok");
	}
	else{
		console.log("sub failed!");
	}
}

function mul(a,b){
	return a*b;
}

function div(a,b){
	return a/b;
}

function test_of_mul(){
	var mult = mul(2,5);
	if (mult ==  10) {
		console.log("mul ok");
	}
	else{
		console.log("mul failed");
	}
}

function test_of_div(){
	var dive = div(4, 2);
	if(dive == 2){
		console.log("div ok");
	}
	else{
		console.log("div failed");
	}
}

test_of_div();
test_of_mul();
test_of_sub();
test_of_add();
