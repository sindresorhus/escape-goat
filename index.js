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
	const values = [].slice.call(arguments, 1);
	let output = input[0];
	for (let i = 0; i < values.length; i++) {
		output = output + exports.escape(values[i]) + input[i + 1];
	}
	return output;
};

exports.unescapeTag = function (input) {
	const values = [].slice.call(arguments, 1);
	let output = input[0];
	for (let i = 0; i < values.length; i++) {
		output = output + exports.unescape(values[i]) + input[i + 1];
	}
	return output;
};
