var through = require('through2');

module.exports = function(option, info) {
	return through(function(buffer, encoding, callback) {
		var str = buffer.toString();
			str = str
			 .replace(/(\n|\r)/g, "") //del \n
			 .replace(/>([\x20\t]+)</g, "><") //del blank & tab
			 .replace(/<!--.+?-->/g, "") // del comment
			 .replace(/^\s+|\s+$/g, "") // trim blank
	
		callback(null, str);
	});
};