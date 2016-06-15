var http = require('http');
var async = require('async');

async.reduce(['one', 'two', 'three'], 0, function (memo, item, callback) {
    var body = '';
    http.get(process.argv[2] + '?number=' + item, function(res) {
        res.on('data', function(chunk) {
            body += chunk.toString();
        })
        res.on('end', function() {
            callback(null, memo + Number(body));
        });
    }).on('error', callback)
}, function(err, result) {
    if(err)
        return console.error(err)
    console.log(result)
})