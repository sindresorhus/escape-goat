/**
Escape a string for use in HTML.

Escapes the following characters in the given `string` argument: `&` `<` `>` `"` `'`.

@example
```
import {htmlEscape} from 'escape-goat';

htmlEscape('🦄 & 🐐');
//=> '🦄 &amp; 🐐'

htmlEscape('Hello <em>World</em>');
//=> 'Hello &lt;em&gt;World&lt;/em&gt;'
```
*/
export function htmlEscape(string: string): string;

/**
[Tagged template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that escapes interpolated values.

@example
```
import {htmlEscape} from 'escape-goat';

const url = 'https://sindresorhus.com?x="🦄"';

htmlEscape`<a href="${url}">Unicorn</a>`;
//=> '<a href="https://sindresorhus.com?x=&quot;🦄&quot;">Unicorn</a>'
```
*/
export function htmlEscape(template: TemplateStringsArray, ...substitutions: readonly unknown[]): string;

/**
Unescape an HTML string to use as a plain string.

Unescapes the following HTML entities in the given `htmlString` argument: `&amp;` `&lt;` `&gt;` `&quot;` `&#39;`.

@example
```
import {htmlUnescape} from 'escape-goat';

htmlUnescape('🦄 &amp; 🐐');
//=> '🦄 & 🐐'
```
*/
export function htmlUnescape(htmlString: string): string;

/**
[Tagged template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that unescapes interpolated values.

@example
```
import {htmlUnescape} from 'escape-goat';

const escapedUrl = 'https://sindresorhus.com?x=&quot;🦄&quot;';

htmlUnescape`URL from HTML: ${url}`;
//=> 'URL from HTML: https://sindresorhus.com?x="🦄"'
```
*/
export function htmlUnescape(template: TemplateStringsArray, ...substitutions: readonly unknown[]): string;

/**
Escape a string for safe interpolation inside an HTML comment.

Encodes `<` and `>` to their `\u` escape sequences so that user-controlled text
cannot open (`<!--`) or close (`-->`) a comment. This prevents HTML comment
injection when rendering `<!-- ${userContent} -->`.

@example
```js
import {escapeComment} from 'escape-goat';

escapeComment('user supplied --> close');
//=> 'user supplied --\u003e close'
```

@example
```js
import {escapeComment} from 'escape-goat';

const comment = 'danger <!-- script';
escapeComment`<!-- ${comment} -->`;
//=> '<!-- \u003c!-- script -->'
```
*/
export function escapeComment(string: string): string;

/**
[Tagged template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) that escapes interpolated values for use inside an HTML comment.

@example
```js
import {escapeComment} from 'escape-goat';

const content = 'break --> out';
escapeComment`<!-- ${content} -->`;
//=> '<!-- break --\u003e out -->'
```
*/
export function escapeComment(template: TemplateStringsArray, ...substitutions: readonly unknown[]): string;
