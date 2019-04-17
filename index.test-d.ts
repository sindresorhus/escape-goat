import {expectType} from 'tsd';
import {escape, unescape, escapeTag, unescapeTag} from '.';

expectType<string>(escape('🦄 & 🐐'));
expectType<string>(unescape('🦄 &amp; 🐐'));
expectType<string>(escape('Hello <em>World</em>'));

const url = 'https://sindresorhus.com?x="🦄"';
expectType<string>(escapeTag`<a href="${url}">Unicorn</a>`);

const escaped = '🦄 &amp; 🐐';
expectType<string>(unescapeTag`unicorn and goat: ${escaped}`);
