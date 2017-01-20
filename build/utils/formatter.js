'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var command = _ref.command,
	    stdout = _ref.stdout,
	    stderr = _ref.stderr,
	    duration = _ref.duration,
	    code = _ref.code;

	var emotion = code === 0 ? '🙂' : '😥';
	return 'Result time : ' + emotion + ' \n\nCommand: ' + command + '\nDuration: ' + duration + 'ms\nstdout: ' + stdout + '\nstderr: ' + stderr + '\nexit code: ' + code + '\n\nEnjoy your day, your rock! \uD83E\uDD18\n';
};