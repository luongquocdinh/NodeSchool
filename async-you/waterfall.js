var http = require('http');
var async = require('async');
var fs = require('fs')

async.waterfall([
	function(done) {
		fs.readFile(process.argv[2], function(err, data) {
			if (err) return done(err)
			done(null, data)
		})
	},

	function(data, done) {
		var content = ''
		http.get(data.toString().trimRight(), function(res) {
			res.on('data', function(chunk) {
				content += chunk.toString()
			});
			res.on('end', function(chunk) {
				done(null, content)
			});
		}).on('error', function(err){
			done(err);
		});
	}
], function done(err, result) {
	if (err)
		return console.error(err)
	console.log(result);
})