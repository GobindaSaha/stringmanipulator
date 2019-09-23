"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magic_string_1 = require("magic-string");
var adjectives = require('adjectives');
var animals = require('animals');
var randomString = Math.random().toString(36).substring(7);
module.exports = {
    overwriteStr(str, start, end, replaceWith) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.overwrite(start, end, replaceWith);
        return result.toString();
    },
    appendStrToEnd(str, appendWith) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.append(appendWith);
        return result.toString();
    },
    appendStrToStart(str, appendWith) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.appendRight(0, appendWith);
        return result.toString();
    },
    appendStrToIndex(str, index, appendWith) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.appendLeft(index, appendWith);
        return result.toString();
    },
    cloneStr(str) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.clone();
        return result.toString();
    },
    moveStr(str, start, end, indexPosition) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.move(start, end, indexPosition);
        return result.toString();
    },
    removeStr(str, start, end) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.remove(start, end);
        return result.toString();
    },
    sliceStr(str, start, end) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.slice(start, end);
        return result.toString();
    },
    snipStr(str, start, end) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.snip(start, end);
        return result.toString();
    },
    trimStr(str, characterToBeTrimmed) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.trim(characterToBeTrimmed);
        return result.toString();
    },
    trimStrFromStart(str, characterToBeTrimmed) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.trimStart(characterToBeTrimmed);
        return result.toString();
    },
    trimStrFromEnd(str, characterToBeTrimmed) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.trimEnd(characterToBeTrimmed);
        return result.toString();
    },
    emptyStrCheck(str) {
        let magicString = new magic_string_1.default(str);
        let result = magicString.isEmpty();
        return result.toString();
    },
    replaceStr(str, replaceStr, replaceWith) {
        let wholeString = str;
        return wholeString.replace(replaceStr, replaceWith);
    },
    lengthStr(str) {
        let wholeString = str;
        return wholeString.length;
    },
    concatStr(str1, str2) {
        return str1.concat(str2);
    },
    returnChar(numeric) {
        return String.fromCharCode(numeric);
    },
    wordContainStr(str, word) {
        return str.includes(word);
    },
    charPositionInStr(str, position) {
        return str.charAt(position);
    },
    indexOfStr(str, searchStr) {
        return str.indexOf(searchStr);
    },
    repeatStr(str, times) {
        return str.repeat(times);
    },
    toLowerCaseStr(str) {
        return str.toLowerCase();
    },
    toUpperCaseStr(str) {
        return str.toUpperCase();
    },
    randomReadableStr() {
        adjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
        return adjectives + '-' + animals() + "-" + randomString;
    }
};
