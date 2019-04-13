import {expectType} from 'tsd';
import * as escapeGoat from '.';

expectType<string>(escapeGoat.escape('🦄 & 🐐'));
expectType<string>(escapeGoat.unescape('🦄 &amp; 🐐'));
expectType<string>(escapeGoat.escape('Hello <em>World</em>'));
const url = 'https://sindresorhus.com?x="🦄"';
expectType<string>(escapeGoat.escapeTag`<a href="${url}">Unicorn</a>`);
const escaped = '🦄 &amp; 🐐';
expectType<string>(escapeGoat.unescapeTag`unicorn and goat: ${escaped}`);
