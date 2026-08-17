import test from 'ava';
import {htmlEscape, htmlUnescape} from './index.js';

test('htmlEscape', t => {
	t.is(htmlEscape('&<>"\''), '&amp;&lt;&gt;&quot;&#39;');
	t.is(htmlEscape('🦄 & 🐐'), '🦄 &amp; 🐐');
	t.is(htmlEscape('Hello <em>World</em>'), 'Hello &lt;em&gt;World&lt;/em&gt;');
});

test('htmlUnescape', t => {
	t.is(htmlUnescape('&amp;&lt;&gt;&quot;&#39;'), '&<>"\'');
	t.is(htmlUnescape('🦄 &amp; 🐐'), '🦄 & 🐐');
	t.is(htmlUnescape('Hello &lt;em&gt;World&lt;/em&gt;'), 'Hello <em>World</em>');
});

test('htmlEscape & htmlUnescape', t => {
	t.is(htmlUnescape(htmlEscape('&<>"\'')), '&<>"\'');
	t.is(htmlUnescape(htmlEscape('&quot;')), '&quot;');
});

test('htmlEscape as template tag', t => {
	t.is(htmlEscape`foobarz${'&<>"\''}`, 'foobarz&amp;&lt;&gt;&quot;&#39;');
	t.is(htmlEscape`🦄 ${'&'} 🐐`, '🦄 &amp; 🐐');
	t.is(htmlEscape`Hello <em><>${'<>'}</em>`, 'Hello <em><>&lt;&gt;</em>');
});

test('htmlEscape as template tag with non-strings', t => {
	t.is(htmlEscape`foobarz${undefined}`, 'foobarzundefined');
	t.is(htmlEscape`🦄 ${true}`, '🦄 true');
	t.is(htmlEscape`Hello <em><>${1}</em>`, 'Hello <em><>1</em>');
});

test('htmlUnescape as template tag', t => {
	t.is(htmlUnescape`foobarz${'&amp;&lt;&gt;&quot;&#39;'}`, 'foobarz&<>"\'');
	t.is(htmlUnescape`🦄 ${'&amp;'} 🐐`, '🦄 & 🐐');
	t.is(htmlUnescape`Hello <em><>${'&lt;&gt;'}</em>`, 'Hello <em><><></em>');
});

test('htmlUnescape as template tag on non-strings', t => {
	t.is(htmlUnescape`foobarz${undefined}`, 'foobarzundefined');
	t.is(htmlUnescape`🦄 ${true}`, '🦄 true');
	t.is(htmlUnescape`Hello <em><>${1}</em>`, 'Hello <em><>1</em>');
});

test('htmlEscape & htmlUnescape as template tags', t => {
	const input = '&<>"\'';
	const actual = htmlUnescape`${htmlEscape`${input}`}`;
	t.is(actual, input);
});

test('escapeComment', t => {
	t.is(escapeComment('user supplied --> close'), 'user supplied --\u003e close');
	t.is(escapeComment('<!-- open'), '\u003c!-- open');
	t.is(escapeComment('a < b > c'), 'a \u003c b \u003e c');
});

test('escapeComment as template tag', t => {
	t.is(escapeComment`<!-- ${'break --> out'} -->`, '<!-- break --\u003e out -->');
	t.is(escapeComment`${'<!-- evil'}`, '\u003c!-- evil');
});
