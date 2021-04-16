import {expectType} from 'tsd';
import {htmlEscape, htmlUnescape} from './index.js';

expectType<string>(htmlEscape('🦄 & 🐐'));
expectType<string>(htmlUnescape('🦄 &amp; 🐐'));
expectType<string>(htmlEscape('Hello <em>World</em>'));

const url = 'https://sindresorhus.com?x="🦄"';
expectType<string>(htmlEscape`<a href="${url}">Unicorn</a>`);

const escaped = '🦄 &amp; 🐐';
expectType<string>(htmlUnescape`unicorn and goat: ${escaped}`);
