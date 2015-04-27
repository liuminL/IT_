function assert(conditon,message)
{
	if(conditon)
	{
		console.log(message + ' ok');
	}
	else
	{
		console.log(message + ' failed');
	}
}

exports.assert = assert;