import MagicString from 'magic-string';
var adjectives = require('adjectives');
var animals = require('animals');
var randomString = Math.random().toString(36).substring(7);

module.exports = {
    overwriteStr(str: string, start: number, end: number, replaceWith: string) {
        let magicString = new MagicString(str);
        let result = magicString.overwrite(start, end, replaceWith);
        return result.toString();
    },

    appendStrToEnd(str: string, appendWith: string) {
        let magicString = new MagicString(str);
        let result = magicString.append(appendWith);
        return result.toString();
    },

    appendStrToStart(str: string, appendWith: string) {
        let magicString = new MagicString(str);
        let result = magicString.appendRight(0, appendWith);
        return result.toString();
    },

    appendStrToIndex(str: string, index: number, appendWith: string) {
        let magicString = new MagicString(str);
        let result = magicString.appendLeft(index, appendWith);
        return result.toString();
    },

    cloneStr(str: string) {
        let magicString = new MagicString(str);
        let result = magicString.clone();
        return result.toString();
    },

    moveStr(str: string, start: number, end: number, indexPosition: number) {
        let magicString = new MagicString(str);
        let result = magicString.move(start, end, indexPosition);
        return result.toString();
    },

    removeStr(str: string, start: number, end: number) {
        let magicString = new MagicString(str);
        let result = magicString.remove(start, end);
        return result.toString();
    },

    sliceStr(str: string, start: number, end: number) {
        let magicString = new MagicString(str);
        let result = magicString.slice(start, end);
        return result.toString();
    },

    snipStr(str: string, start: number, end: number) {
        let magicString = new MagicString(str);
        let result = magicString.snip(start, end);
        return result.toString();
    },

    trimStr(str: string, characterToBeTrimmed: string) {
        let magicString = new MagicString(str);
        let result = magicString.trim(characterToBeTrimmed);
        return result.toString();
    },

    trimStrFromStart(str: string, characterToBeTrimmed: string) {
        let magicString = new MagicString(str);
        let result = magicString.trimStart(characterToBeTrimmed);
        return result.toString();
    },

    trimStrFromEnd(str: string, characterToBeTrimmed: string) {
        let magicString = new MagicString(str);
        let result = magicString.trimEnd(characterToBeTrimmed);
        return result.toString();
    },

    emptyStrCheck(str: string) {
        let magicString = new MagicString(str);
        let result = magicString.isEmpty();
        return result.toString();
    },

    replaceStr(str: string, replaceStr: string, replaceWith: string) {
        let wholeString = str;
        return wholeString.replace(replaceStr, replaceWith);
    },

    lengthStr(str: string) {
        let wholeString = str;
        return wholeString.length;
    },

    concatStr(str1: string, str2: string) {
        return str1.concat(str2);
    },

    returnChar(numeric: number) {
        return String.fromCharCode(numeric);
    },

    wordContainStr(str: string, word: string) {
        return str.includes(word);
    },

    charPositionInStr(str: string, position: number) {
        return str.charAt(position);
    },

    indexOfStr(str: string, searchStr: string) {
        return str.indexOf(searchStr);
    },

    repeatStr(str: string, times: number) {
        return str.repeat(times);
    },

    toLowerCaseStr(str: string) {
        return str.toLowerCase();
    },

    toUpperCaseStr(str: string) {
        return str.toUpperCase();
    },

    randomReadableStr() {
        adjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
        return adjectives + '-' + animals() + "-" + randomString;
    }
}