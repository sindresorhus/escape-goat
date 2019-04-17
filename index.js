'use strict';

exports.escape = string => string
	.replace(/&/g, '&amp;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

exports.unescape = htmlString => htmlString
	.replace(/&gt;/g, '>')
	.replace(/&lt;/g, '<')
	.replace(/&#39;/g, '\'')
	.replace(/&quot;/g, '"')
	.replace(/&amp;/g, '&');

exports.escapeTag = (strings, ...values) => {
	let output = strings[0];
	for (let i = 0; i < values.length; i++) {
		output = output + exports.escape(values[i]) + strings[i + 1];
	}

	return output;
};

exports.unescapeTag = (strings, ...values) => {
	let output = strings[0];
	for (let i = 0; i < values.length; i++) {
		output = output + exports.unescape(values[i]) + strings[i + 1];
	}

	return output;
};
