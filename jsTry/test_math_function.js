var math = require('./math_function.js');
var test = require('./test_framework.js');

function test_of_add()
{
	var sum = math.add(2,3);
	test.assert(sum == 5, 'add');
}

function test_of_sub()
{
	var diff = math.sub(5,2);
	test.assert(diff == 3, 'sub');
}

function test_of_mul()
{
	var prod = math.mul(2,3);
	test.assert(prod == 6,'mul');
}

function test_of_div()
{
	var quo = math.div(6,2);
	test.assert(quo == 3, 'div');
}

function test_of_max1()
{
	var m = math.max(4,2)
	test.assert(m == 4, 'given 4 and 2, max 4 is');
}

function test_of_max2()
{
	var m = math.max(6,10)
	test.assert(m == 10, 'given 6 and 10, max 10 is');
}

test_of_add();
test_of_sub();
test_of_mul();
test_of_div();
test_of_max1();
test_of_max2();