function all(x, y) {
	return new Promise (function(fulfill, reject) {
		var counter = 0;
		var out = [];
		x.then(function(value) {
			out[0] = value
			counter++;
			if (counter >= 2) {
				fulfill(out);
			}
		});

		y.then(function(value) {
			out[1] = value;
			counter++
			if(counter >= 2) {
				fulfill(out)
			}
		})
	})
}

all(getPromise1(), getPromise2()).then(console.log);