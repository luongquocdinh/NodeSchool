var http = require('http');
var async = require('async');

function reqUrl(url, done) {
	var body = ''
	http.get(url, function(res) {
		res.on('data', function(chunk) {
			body += chunk.toString()
		});
		res.on('end', function (chunk) {
			done(null, body)
		})
	}).on('error', function(err) {
		done(err)
	})
}

async.series({
	requestOne: function(done) {
		reqUrl(process.argv[2], done);
	},

	requestTwo: function(done) {
		reqUrl(process.argv[3], done);
	}
}, function (err, result) {
	if (err) 
		return console.log(err)
	console.log(result)
})