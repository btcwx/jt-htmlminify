var jt = require('jt-cli'),
	path = require('path'),
	fs = require('fs');

jt.cwd = __dirname;
jt.setConfig('base', path.resolve(__dirname));
jt.init();

jt.fs.assign('jt-htmlminify', require('../index.js'));
describe('include', function() {
	it('正确压缩', function(done) {
		jt.fs.readCombineFile({
			processor: 'jt-htmlminify',
			file: './html.html'
		}, function(data) {
			var src = data.toString();

			jt.fs.readFile('./html.min.html', function(min) {
				min = min.toString();
				if(min == src) {
					done();
				} else {
					done(false);
				}
			});
		});
	});
});