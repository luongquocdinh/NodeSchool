var http = require('http');
var async = require('async');

async.each(process.argv.slice(2), function(data, callback) {
    http.get(data, function (res) {
        res.on('data', function(chunk) {

        });
        res.on('end', function() {
            callback(null)
        });
    }).on('error', function(err) {
        console.log(err);
    });
}, function (err) {
    if (err)
        return console.error(err);
});