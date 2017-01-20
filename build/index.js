#!/usr/bin/env node
'use strict';

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _config = require('./utils/config');

var _config2 = _interopRequireDefault(_config);

var _spawn = require('./utils/spawn');

var _spawn2 = _interopRequireDefault(_spawn);

var _connectors = require('./connectors');

var _connectors2 = _interopRequireDefault(_connectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var touchIt = function touchIt(payload) {
	Object.keys(_config2.default.connectors).forEach(function (connectorName) {
		var config = _config2.default.connectors[connectorName];

		connectorName = connectorName.replace(/^\w/, function (n) {
			return n.toUpperCase();
		});

		_connectors2.default[connectorName].send(config, payload);
	});
};

var base = {
	command: '',
	stdout: '',
	stderr: '',
	code: '',
	duration: null
};

var mergePayload = function mergePayload(payload) {

	return Object.assign({}, base, payload);
};

var display = function display(payload) {
	if (payload.stdout) {
		_process2.default.stdout.write(payload.stdout);
	}

	if (payload.stderr) {
		_process2.default.stderr.write(payload.stderr);
	}

	return payload;
};

(0, _spawn2.default)(_process2.default.argv.slice(2)).then(mergePayload).then(display).then(touchIt).catch(function (error) {
	console.log(error);
	throw error;
});