// TODO: Use `String#replaceAll` when targeting Node.js 16.
// Multiple `.replace()` calls are actually faster than using replacer functions #2.
const _htmlEscape = string => string
	.replace(/&/g, '&amp;') // Must happen first or else it will escape other just-escaped characters.
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

const _htmlUnescape = htmlString => htmlString
	.replace(/&gt;/g, '>')
	.replace(/&lt;/g, '<')
	.replace(/&#0?39;/g, '\'')
	.replace(/&quot;/g, '"')
	.replace(/&amp;/g, '&'); // Must happen last or else it will unescape other characters in the wrong order.

// Escape characters that would let interpolated text break out of (or open) an
// HTML comment. `<` and `>` are encoded to their `\u` escape sequences, which
// render as the same glyphs but are no longer parsed as comment delimiters.
const _commentEscape = string => string
	.replace(/</g, '\\u003c')
	.replace(/>/g, '\\u003e');

export function htmlEscape(strings, ...values) {
	if (typeof strings === 'string') {
		return _htmlEscape(strings);
	}

	let output = strings[0];
	for (const [index, value] of values.entries()) {
		output = output + _htmlEscape(String(value)) + strings[index + 1];
	}

	return output;
}

export function htmlUnescape(strings, ...values) {
	if (typeof strings === 'string') {
		return _htmlUnescape(strings);
	}

	let output = strings[0];
	for (const [index, value] of values.entries()) {
		output = output + _htmlUnescape(String(value)) + strings[index + 1];
	}

	return output;
}

export function escapeComment(strings, ...values) {
	if (typeof strings === 'string') {
		return _commentEscape(strings);
	}

	let output = strings[0];
	for (const [index, value] of values.entries()) {
		output = output + _commentEscape(String(value)) + strings[index + 1];
	}

	return output;
}
