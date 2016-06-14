var promise = new Promise(function (fulfill, reject) {
	fulfill("SUCCESS")
})

function onReject(err) {
	console.log("ERROR!")
}

promise.then(console.log).catch(onReject)

var promise1 = Promise.resolve('SUCCESS')
var promise2 = Promise.reject('ERROR')