import MagicString from 'magic-string';
var adjectives = require('adjectives');
var animals = require('animals');
var randomString = Math.random().toString(36).substring(7);

export function overwriteStr(str: string, start: number, end: number, replaceWith: string) {
    let magicString = new MagicString(str);
    let result = magicString.overwrite(start, end, replaceWith);
    return result.toString();
}

export function appendStrToEnd(str: string, appendWith: string) {
    let magicString = new MagicString(str);
    let result = magicString.append(appendWith);
    return result.toString();
}

export function appendStrToStart(str: string, appendWith: string) {
    let magicString = new MagicString(str);
    let result = magicString.appendRight(0, appendWith);
    return result.toString();
}

export function appendStrToIndex(str: string, index: number, appendWith: string) {
    let magicString = new MagicString(str);
    let result = magicString.appendLeft(index, appendWith);
    return result.toString();
}

export function cloneStr(str: string) {
    let magicString = new MagicString(str);
    let result = magicString.clone();
    return result.toString();
}

export function moveStr(str: string, start: number, end: number, indexPosition: number) {
    let magicString = new MagicString(str);
    let result = magicString.move(start, end, indexPosition);
    return result.toString();
}

export function removeStr(str: string, start: number, end: number) {
    let magicString = new MagicString(str);
    let result = magicString.remove(start, end);
    return result.toString();
}

export function sliceStr(str: string, start: number, end: number) {
    let magicString = new MagicString(str);
    let result = magicString.slice(start, end);
    return result.toString();
}

export function snipStr(str: string, start: number, end: number) {
    let magicString = new MagicString(str);
    let result = magicString.snip(start, end);
    return result.toString();
}

export function trimStr(str: string, characterToBeTrimmed: string) {
    let magicString = new MagicString(str);
    let result = magicString.trim(characterToBeTrimmed);
    return result.toString();
}

export function trimStrFromStart(str: string, characterToBeTrimmed: string) {
    let magicString = new MagicString(str);
    let result = magicString.trimStart(characterToBeTrimmed);
    return result.toString();
}

export function trimStrFromEnd(str: string, characterToBeTrimmed: string) {
    let magicString = new MagicString(str);
    let result = magicString.trimEnd(characterToBeTrimmed);
    return result.toString();
}

export function emptyStrCheck(str: string) {
    let magicString = new MagicString(str);
    let result = magicString.isEmpty();
    return result.toString();
}

export function replaceStr(str: string, replaceStr: string, replaceWith: string) {
    let wholeString = str;
    return wholeString.replace(replaceStr, replaceWith);
}

export function lengthStr(str: string) {
    let wholeString = str;
    return wholeString.length;
}

export function concatStr(str1: string, str2: string) {
    return str1.concat(str2);
}

export function returnChar(numeric: number) {
    return String.fromCharCode(numeric);
}

export function wordContainStr(str: string, word: string) {
    return str.includes(word);
}

export function charPositionInStr(str: string, position: number) {
    return str.charAt(position);
}

export function indexOfStr(str: string, searchStr: string) {
    return str.indexOf(searchStr);
}

export function repeatStr(str: string, times: number) {
    return str.repeat(times);
}

export function toLowerCaseStr(str: string) {
    return str.toLowerCase();
}

export function toUpperCaseStr(str: string) {
    return str.toUpperCase();
}

export function randomReadableStr() {
    adjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
    return adjectives + '-' + animals() + "-" + randomString;
}