import test from 'ava';
import {escape, unescape, escapeTag, unescapeTag} from '.';

test('escape', t => {
	t.is(escape('&<>"\''), '&amp;&lt;&gt;&quot;&#39;');
	t.is(escape('🦄 & 🐐'), '🦄 &amp; 🐐');
	t.is(escape('Hello <em>World</em>'), 'Hello &lt;em&gt;World&lt;/em&gt;');
});

test('unescape', t => {
	t.is(unescape('&amp;&lt;&gt;&quot;&#39;'), '&<>"\'');
	t.is(unescape('🦄 &amp; 🐐'), '🦄 & 🐐');
	t.is(unescape('Hello &lt;em&gt;World&lt;/em&gt;'), 'Hello <em>World</em>');
});

test('escape & unescape', t => {
	t.is(unescape(escape('&<>"\'')), '&<>"\'');
	t.is(unescape(escape('&quot;')), '&quot;');
});

test('escapeTag', t => {
	t.is(escapeTag`foobarz${'&<>"\''}`, 'foobarz&amp;&lt;&gt;&quot;&#39;');
	t.is(escapeTag`🦄 ${'&'} 🐐`, '🦄 &amp; 🐐');
	t.is(escapeTag`Hello <em><>${'<>'}</em>`, 'Hello <em><>&lt;&gt;</em>');
});

test('unescapeTag', t => {
	t.is(unescapeTag`foobarz${'&amp;&lt;&gt;&quot;&#39;'}`, 'foobarz&<>"\'');
	t.is(unescapeTag`🦄 ${'&amp;'} 🐐`, '🦄 & 🐐');
	t.is(unescapeTag`Hello <em><>${'&lt;&gt;'}</em>`, 'Hello <em><><></em>');
});

test('escapeTag & unescapeTag', t => {
	const input = '&<>"\'';
	const actual = unescapeTag`${escapeTag`${input}`}`;
	t.is(actual, input);
});
