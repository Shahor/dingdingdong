'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _os = require('os');

var _path = require('path');

var _fs = require('fs');

var _ramda = require('ramda');

var _process = require('process');

var configFile = '.dingdingdongrc';

/* Ramda has no practical purpose here other than
me trying to look cool using what the cool kids do.

=> (•_•) 
=> ( •_•)>⌐■-■ 
=> (⌐■_■) deal with it
*/
// TODO : Test for .dingdingdongrc presence
var getPath = function getPath() {
	return (0, _path.resolve)((0, _os.homedir)(), configFile);
};
var read = function read(path) {
	return (0, _fs.readFileSync)(path, 'utf8');
};
var load = (0, _ramda.compose)(JSON.parse, read, getPath);

var Config = void 0;
try {
	Config = load();
} catch (e) {
	if (e.code === 'ENOENT') {
		console.log('\u26A0\uFE0F \uFE0F I can\'t find the much needed ' + getPath() + ' file.');
		console.log('Please consider creating it and filling it with the proper values.');
		console.log('Cheers \uD83D\uDC4B');
	} else {
		console.debug(e);
	}

	(0, _process.exit)(1);
}

var _default = {
	"connectors": {
		"pushbullet": {}
	}
};

exports.default = Object.assign({}, _default, Config);