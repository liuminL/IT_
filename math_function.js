function add(a,b)
{
	return a+b;
}

function sub(a,b)
{
	return a-b;
}

function mul(a,b)
{
	return a*b;
}

function div(a,b)
{
	return a/b;
}

function max(a,b)
{
	if (a>b)
	{
		return a;
	}
	else
	{
		return b;
	}
}

exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.max = max;