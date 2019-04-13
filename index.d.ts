/**
Escape a string for use in HTML.

Escapes the following characters in the given `string` string: `&` `<` `>` `"` `'`.

@example
```
import * as escapeGoat from 'escape-goat';

escapeGoat.escape('🦄 & 🐐');
//=> '🦄 &amp; 🐐'

escapeGoat.escape('Hello <em>World</em>');
//=> 'Hello &lt;em&gt;World&lt;/em&gt;'
```
*/
export function escape(string: string): string;

/**
Unescape an HTML string to use as a plain string.

Unescapes the following HTML entities in the given `htmlString` string: `&amp;` `&lt;` `&gt;` `&quot;` `&#39;`.

@example
```
import * as escapeGoat from 'escape-goat';

escapeGoat.unescape('🦄 &amp; 🐐');
//=> '🦄 & 🐐'
```
*/
export function unescape(htmlString: string): string;

/**
[Tagged template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that escapes interpolated values.

@example
```
import * as escapeGoat from 'escape-goat';

const url = 'https://sindresorhus.com?x="🦄"';
escapeGoat.escapeTag`<a href="${url}">Unicorn</a>`;
//=> '<a href="https://sindresorhus.com?x=&quot;🦄&quot;">Unicorn</a>'
```
*/
export function escapeTag(template: TemplateStringsArray, ...substitutions: unknown[]): string;

/**
[Tagged template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that unescapes interpolated values.
*/
export function unescapeTag(template: TemplateStringsArray, ...substitutions: unknown[]): string;
