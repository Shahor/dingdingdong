'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.send = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _formatter = require('../utils/formatter');

var _formatter2 = _interopRequireDefault(_formatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENDPOINT = "https://api.pushbullet.com/v2/pushes";
var doRequest = function doRequest(_ref, payload) {
	var access_token = _ref.access_token;

	var data = '';

	return new Promise(function (resolve, reject) {
		_request2.default.defaults({
			headers: {
				'Access-Token': access_token
			}
		}).post(ENDPOINT).form({
			type: 'note',
			title: '🔔 Ding ding dong!',
			body: (0, _formatter2.default)(payload)
		}).on('data', function (chunk) {
			data += chunk;
		}).on('error', reject).on('end', function () {
			resolve(data);
		});
	});
};

var send = exports.send = doRequest;