'use strict';

exports.escape = input => input
	.replace(/&/g, '&amp;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

exports.unescape = input => input
	.replace(/&gt;/g, '>')
	.replace(/&lt;/g, '<')
	.replace(/&#39;/g, '\'')
	.replace(/&quot;/g, '"')
	.replace(/&amp;/g, '&');

exports.escapeTag = function (input) {
	let output = input[0];
	for (let i = 1; i < arguments.length; i++) {
		output = output + exports.escape(arguments[i]) + input[i];
	}
	return output;
};

exports.unescapeTag = function (input) {
	let output = input[0];
	for (let i = 1; i < arguments.length; i++) {
		output = output + exports.unescape(arguments[i]) + input[i];
	}
	return output;
};
