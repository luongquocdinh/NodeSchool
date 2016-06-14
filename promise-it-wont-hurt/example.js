promise.then(function(){
	// callback success
}, function(){
   // callback err
})

function readfile(path, calback){
	fs.readFile(path, (err, data) => {
        if(err) callback(err);
        callback(null, data);
	});
}


console.log('before read');
readFile('etc/passwprd', function(err, result){
	if(err){
		console.log(err);
		return;
	}
	console.log(result);
})
console.log('after read');



fs.readFile(path).then(function(result){
	console.log(result);
}, function(err){
	console.log(err);
})

fs.readFile(path).then(function(result){
	console.log(result);
}).catch(function(err){
	console.log(err);
})