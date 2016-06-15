var http = require('http');
var async = require('async');

async.map(process.argv.slice(2), function (item, callback) {
    var body = ''
    http.get(item, function(res) {
        res.on('data', function(chunk) {
            body += chunk.toString();
        });
        res.on('end', function() {
            return callback(null, body);
        });
    });
}, function callback(err, results) {
    if (err)
        return console.log(err);
    console.log(results);
})