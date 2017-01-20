'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _process = require('process');

var _child_process = require('child_process');

var _ramda = require('ramda');

var toTimeDiff = function toTimeDiff(start) {
	return (0, _process.hrtime)(start);
};
var toMs = function toMs(duration) {
	return (duration[0] * 1e9 + duration[1]) / 1e6;
};

var toDuration = (0, _ramda.compose)(toMs, toTimeDiff);

// TODO : Handle stdin!

exports.default = function (args) {
	var command = args.shift();
	var spawned = (0, _child_process.spawn)(command, args);

	var stderr = '';
	var stdout = '';

	return new Promise(function (resolve, reject) {
		var startTime = (0, _process.hrtime)();
		spawned.stdout.on('data', function (data) {
			stdout += data;
		});

		spawned.stderr.on('data', function (data) {
			stderr += data;
		});

		spawned.on('error', function (e) {
			return reject(e);
		});

		spawned.on('close', function (code) {
			var toNl = function toNl(str) {
				return str.replace(/\n/, '\n');
			};

			stdout = toNl(stdout);
			stderr = toNl(stderr);
			var duration = toDuration(startTime);

			resolve({
				command: command + ' ' + args.join(' '),
				stdout: stdout,
				stderr: stderr,
				code: code,
				duration: duration
			});
		});
	});
};