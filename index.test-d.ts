import {expectType} from 'tsd';
import {htmlEscape, htmlUnescape, htmlEscapeTag, htmlUnescapeTag} from '.';

expectType<string>(htmlEscape('🦄 & 🐐'));
expectType<string>(htmlUnescape('🦄 &amp; 🐐'));
expectType<string>(htmlEscape('Hello <em>World</em>'));

const url = 'https://sindresorhus.com?x="🦄"';
expectType<string>(htmlEscapeTag`<a href="${url}">Unicorn</a>`);

const escaped = '🦄 &amp; 🐐';
expectType<string>(htmlUnescapeTag`unicorn and goat: ${escaped}`);
