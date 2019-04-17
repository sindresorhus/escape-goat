/**
Escape a string for use in HTML.

Escapes the following characters in the given `string` argument: `&` `<` `>` `"` `'`.

@example
```
import {escape} from 'escape-goat';

escape('🦄 & 🐐');
//=> '🦄 &amp; 🐐'

escape('Hello <em>World</em>');
//=> 'Hello &lt;em&gt;World&lt;/em&gt;'
```
*/
export function escape(string: string): string;

/**
Unescape an HTML string to use as a plain string.

Unescapes the following HTML entities in the given `htmlString` argument: `&amp;` `&lt;` `&gt;` `&quot;` `&#39;`.

@example
```
import {unescape} from 'escape-goat';

unescape('🦄 &amp; 🐐');
//=> '🦄 & 🐐'
```
*/
export function unescape(htmlString: string): string;

/**
[Tagged template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that escapes interpolated values.

@example
```
import {escapeTag} from 'escape-goat';

const url = 'https://sindresorhus.com?x="🦄"';

escapeTag`<a href="${url}">Unicorn</a>`;
//=> '<a href="https://sindresorhus.com?x=&quot;🦄&quot;">Unicorn</a>'
```
*/
export function escapeTag(template: TemplateStringsArray, ...substitutions: readonly unknown[]): string;

/**
[Tagged template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that unescapes interpolated values.

@example
```
import {unescapeTag} from 'escape-goat';

const escapedUrl = 'https://sindresorhus.com?x=&quot;🦄&quot;';

unescapeTag`Url from HTML: ${url}`;
//=> 'Url from HTML: https://sindresorhus.com?x="🦄"'
```
*/
export function unescapeTag(template: TemplateStringsArray, ...substitutions: readonly unknown[]): string;
