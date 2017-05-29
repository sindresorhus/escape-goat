'use strict';

const escaped = ['&amp;', '&lt;', '&gt;', '&quot;', '&#39;'];

const unescaped = ['&', '<', '>', '"', '\''];

exports.escape = input =>
	input.replace(/[&<>"']/g, m => escaped[unescaped.indexOf(m)]);

exports.unescape = input =>
	input.replace(/&(?:amp|lt|gt|quot|#39);/g, m => unescaped[escaped.indexOf(m)]);
