import test from 'ava';
import {htmlEscape, htmlUnescape, htmlEscapeTag, htmlUnescapeTag} from '.';

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

test('htmlEscapeTag', t => {
	t.is(htmlEscapeTag`foobarz${'&<>"\''}`, 'foobarz&amp;&lt;&gt;&quot;&#39;');
	t.is(htmlEscapeTag`🦄 ${'&'} 🐐`, '🦄 &amp; 🐐');
	t.is(htmlEscapeTag`Hello <em><>${'<>'}</em>`, 'Hello <em><>&lt;&gt;</em>');
});

test.failing('htmlEscapeTag non-strings', t => {
	t.is(htmlEscapeTag`foobarz${undefined}`, 'foobarzundefined');
	t.is(htmlEscapeTag`🦄 ${true}`, '🦄 true');
	t.is(htmlEscapeTag`Hello <em><>${1}</em>`, 'Hello <em><>1</em>');
});

test('htmlUnescapeTag', t => {
	t.is(htmlUnescapeTag`foobarz${'&amp;&lt;&gt;&quot;&#39;'}`, 'foobarz&<>"\'');
	t.is(htmlUnescapeTag`🦄 ${'&amp;'} 🐐`, '🦄 & 🐐');
	t.is(htmlUnescapeTag`Hello <em><>${'&lt;&gt;'}</em>`, 'Hello <em><><></em>');
});

test.failing('htmlUnescapeTag non-strings', t => {
	t.is(htmlUnescapeTag`foobarz${undefined}`, 'foobarzundefined');
	t.is(htmlUnescapeTag`🦄 ${true}`, '🦄 true');
	t.is(htmlUnescapeTag`Hello <em><>${1}</em>`, 'Hello <em><>1</em>');
});

test('htmlEscapeTag & htmlUnescapeTag', t => {
	const input = '&<>"\'';
	const actual = htmlUnescapeTag`${htmlEscapeTag`${input}`}`;
	t.is(actual, input);
});
