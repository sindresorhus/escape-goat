'use strict';

const escapes = new Map([
	['&', '&amp;'],
	['<', '&lt;'],
	['>', '&gt;'],
	['"', '&quot;'],
	['\'', '&#39;']
]);

const unescapes = new Map([
	['&amp;', '&'],
	['&lt;', '<'],
	['&gt;', '>'],
	['&quot;', '"'],
	['&#39;', '\'']
]);

exports.escape = input =>
	input.replace(/[&<>"']/g, m => escapes.get(m) || m);

exports.unescape = input =>
	input.replace(/&(?:amp|lt|gt|quot|#39);/g, m => unescapes.get(m) || m);
