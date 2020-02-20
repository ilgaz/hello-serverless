const { randomPerson, getPersonById } = require('./lib');

module.exports.hello = async event => {
	const message = `Serverless is awesome! It's now ${Date.now().toLocaleString()}`
  return {
    statusCode: 200,
    body: JSON.stringify({ message }, null, 2),
  };
};

module.exports.person = async event => {
	const { queryStringParameters: qs } = event;
	let request;
	if (qs !== null && qs.hasOwnProperty('id')) request = await getPersonById(qs.id);
	else request = await randomPerson();
	
	return { 
		statusCode: 200,
		body: JSON.stringify(request.data, null, 2),
	}
}

module.exports.ping = async event => {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "pong" }, null, 2)
	}
}
