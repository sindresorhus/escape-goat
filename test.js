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
	t.is(m.unescape(m.escape(input)), '&<>"\'');
	t.is(m.unescape(m.escape(input)), '&quot;');
});

test('escapeTag', t => {
	t.is(m.escapeTag`foobarz${`&<>"'`}`, 'foobarz&amp;&lt;&gt;&quot;&#39;');
	t.is(m.escapeTag`🦄 ${'&'} 🐐`, '🦄 &amp; 🐐');
	t.is(m.escapeTag`Hello <em><>${`<>`}</em>`, 'Hello <em><>&lt;&gt;</em>');
});

test('unescapeTag', t => {
	t.is(m.unescapeTag`foobarz${'&amp;&lt;&gt;&quot;&#39;'}`, 'foobarz&<>"\'');
	t.is(m.unescapeTag`🦄 ${'&amp;'} 🐐`, '🦄 & 🐐');
	t.is(m.unescapeTag`Hello <em><>${`&lt;&gt;`}</em>`, 'Hello <em><><></em>');
});

test('escapeTag & unescapeTag', t => {
	const input = '&<>"\'';
	const actual = m.unescapeTag`${m.escapeTag`${input}`}`;
	t.is(actual, input);
});
