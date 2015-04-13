function add(a,b){
	return a+b;
}

function sub(a,b){
	return a-b;
}

function mul(a,b){
	return a*b;
}

function div(a,b){
	return a/b;
}

function ass(message, result){
	if(message){
	console.log(result + "ok");
	}else{
	console.log(result + "failed");
	}
}

function test_of_add(){
	var sum = add(2, 3);
	ass(sum = 5, add);
}	

function test_of_sub(){
	var diff = sub(4,2);
	ass(diff = 2, sub);
}

function test_of_mul(){
	var mult = mul(2,5);
	ass(mult = 10, mul);
	}

function test_of_div(){
	var dive = div(4, 2);
	ass(dive = 4, div);
}


test_of_mul();
test_of_add();
test_of_div();
test_of_sub();