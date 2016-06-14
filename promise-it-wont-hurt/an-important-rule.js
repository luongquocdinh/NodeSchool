function alwaysThrows () {
	throw new Error("OH NOES");
}

function iterate (index) {
	console.log(index)
	return index + 1;
}

Promise.resolve(iterate(1))
		.then(iterate)
		.then(iterate)
		.then(iterate)
		.then(iterate)
		.then(alwaysThrows)
		.then(iterate)
		.then(iterate)
		.then(iterate)
		.then(iterate)
		.then(iterate)
		.then(null, console.log)