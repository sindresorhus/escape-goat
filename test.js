import test from 'ava';
import escapeGoat from '.';

test('escape', t => {
	t.is(escapeGoat.escape('&<>"\''), '&amp;&lt;&gt;&quot;&#39;');
	t.is(escapeGoat.escape('🦄 & 🐐'), '🦄 &amp; 🐐');
	t.is(escapeGoat.escape('Hello <em>World</em>'), 'Hello &lt;em&gt;World&lt;/em&gt;');
});

test('unescape', t => {
	t.is(escapeGoat.unescape('&amp;&lt;&gt;&quot;&#39;'), '&<>"\'');
	t.is(escapeGoat.unescape('🦄 &amp; 🐐'), '🦄 & 🐐');
	t.is(escapeGoat.unescape('Hello &lt;em&gt;World&lt;/em&gt;'), 'Hello <em>World</em>');
});

test('escape & unescape', t => {
	t.is(escapeGoat.unescape(escapeGoat.escape('&<>"\'')), '&<>"\'');
	t.is(escapeGoat.unescape(escapeGoat.escape('&quot;')), '&quot;');
});

test('escapeTag', t => {
	t.is(escapeGoat.escapeTag`foobarz${'&<>"\''}`, 'foobarz&amp;&lt;&gt;&quot;&#39;');
	t.is(escapeGoat.escapeTag`🦄 ${'&'} 🐐`, '🦄 &amp; 🐐');
	t.is(escapeGoat.escapeTag`Hello <em><>${'<>'}</em>`, 'Hello <em><>&lt;&gt;</em>');
});

test('unescapeTag', t => {
	t.is(escapeGoat.unescapeTag`foobarz${'&amp;&lt;&gt;&quot;&#39;'}`, 'foobarz&<>"\'');
	t.is(escapeGoat.unescapeTag`🦄 ${'&amp;'} 🐐`, '🦄 & 🐐');
	t.is(escapeGoat.unescapeTag`Hello <em><>${'&lt;&gt;'}</em>`, 'Hello <em><><></em>');
});

test('escapeTag & unescapeTag', t => {
	const input = '&<>"\'';
	const actual = escapeGoat.unescapeTag`${escapeGoat.escapeTag`${input}`}`;
	t.is(actual, input);
});
