import test from 'ava';
import m from '.';

test('escape', t => {
	t.is(m.escape('&<>"\''), '&amp;&lt;&gt;&quot;&#39;');
	t.is(m.escape('🦄 & 🐐'), '🦄 &amp; 🐐');
	t.is(m.escape('Hello <em>World</em>'), 'Hello &lt;em&gt;World&lt;/em&gt;');
});

test('unescape', t => {
	t.is(m.unescape('&amp;&lt;&gt;&quot;&#39;'), '&<>"\'');
	t.is(m.unescape('🦄 &amp; 🐐'), '🦄 & 🐐');
	t.is(m.unescape('Hello &lt;em&gt;World&lt;/em&gt;'), 'Hello <em>World</em>');
});

test('escape & unescape', t => {
	const input = '&<>"\'';
	const actual = m.unescape(m.escape(m.unescape(m.escape(input))));
	t.is(actual, input);
});
