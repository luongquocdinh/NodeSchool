var http = require('http');
var query = require('querystring');
var async = require('async');

var hostname = process.argv[2];
var port = process.argv[3];
var url = 'http://' + hostname + ':' + port;

function addUser(user_id, next) {
    var data = JSON.stringify({'user_id' : user_id});
    opts = {
        hostname: hostname,
        port: port,
        path: '/user/create/',
        method: 'POST',
        headers: {
            'Content-Length' : data.length
        }
    };
    var req = http.request(opts, function (res) {
        res.on('data', function(chunk) {

        });
        res.on('end', function() {
            next();
        });
    });

    req.on('error', function(err) {
        next(err);
    });

    req.write(data);
    req.end();
}


async.series({
    port: function(done) {
        async.times(5, function(n, next){
            addUser(++n, function(err) {
                next(err);
            });
        }, function (err) {
            if (err)
                return done(err);
            done(null, 'save')
        });
    },

    get: function(done) {
        http.get(url + '/users', function(res) {
            var body = '';
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function(){
                done(null, body);
            });
        }).on('error', done);
    }
}, function (err, result) {
    if (err)
        return console.error(err);
    console.log(result.get)
});
