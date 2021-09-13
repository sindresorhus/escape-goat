// Multiple replace() calls are actually faster than using replacer functions #2
// TODO: Use replaceAll when targeting Node v15+
const _htmlEscape = string => string
	.replace(/&/g, '&amp;') // Must happen first or else it will escape other just-escaped characters
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#39;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;');

const _htmlUnescape = htmlString => htmlString
	.replace(/&gt;/g, '>')
	.replace(/&lt;/g, '<')
	.replace(/&#0?39;/g, '\'')
	.replace(/&quot;/g, '"')
	.replace(/&amp;/g, '&'); // Must happen last or else it will unescape other characters in the wrong order

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
