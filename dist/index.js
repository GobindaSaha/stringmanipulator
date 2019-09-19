"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magic_string_1 = require("magic-string");
var adjectives = require('adjectives');
var animals = require('animals');
var randomString = Math.random().toString(36).substring(7);
function overwriteStr(str, start, end, replaceWith) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.overwrite(start, end, replaceWith);
    return result.toString();
}
exports.overwriteStr = overwriteStr;
function appendStrToEnd(str, appendWith) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.append(appendWith);
    return result.toString();
}
exports.appendStrToEnd = appendStrToEnd;
function appendStrToStart(str, appendWith) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.appendRight(0, appendWith);
    return result.toString();
}
exports.appendStrToStart = appendStrToStart;
function appendStrToIndex(str, index, appendWith) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.appendLeft(index, appendWith);
    return result.toString();
}
exports.appendStrToIndex = appendStrToIndex;
function cloneStr(str) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.clone();
    return result.toString();
}
exports.cloneStr = cloneStr;
function moveStr(str, start, end, indexPosition) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.move(start, end, indexPosition);
    return result.toString();
}
exports.moveStr = moveStr;
function removeStr(str, start, end) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.remove(start, end);
    return result.toString();
}
exports.removeStr = removeStr;
function sliceStr(str, start, end) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.slice(start, end);
    return result.toString();
}
exports.sliceStr = sliceStr;
function snipStr(str, start, end) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.snip(start, end);
    return result.toString();
}
exports.snipStr = snipStr;
function trimStr(str, characterToBeTrimmed) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.trim(characterToBeTrimmed);
    return result.toString();
}
exports.trimStr = trimStr;
function trimStrFromStart(str, characterToBeTrimmed) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.trimStart(characterToBeTrimmed);
    return result.toString();
}
exports.trimStrFromStart = trimStrFromStart;
function trimStrFromEnd(str, characterToBeTrimmed) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.trimEnd(characterToBeTrimmed);
    return result.toString();
}
exports.trimStrFromEnd = trimStrFromEnd;
function emptyStrCheck(str) {
    let magicString = new magic_string_1.default(str);
    let result = magicString.isEmpty();
    return result.toString();
}
exports.emptyStrCheck = emptyStrCheck;
function replaceStr(str, replaceStr, replaceWith) {
    let wholeString = str;
    return wholeString.replace(replaceStr, replaceWith);
}
exports.replaceStr = replaceStr;
function lengthStr(str) {
    let wholeString = str;
    return wholeString.length;
}
exports.lengthStr = lengthStr;
function concatStr(str1, str2) {
    return str1.concat(str2);
}
exports.concatStr = concatStr;
function returnChar(numeric) {
    return String.fromCharCode(numeric);
}
exports.returnChar = returnChar;
function wordContainStr(str, word) {
    return str.includes(word);
}
exports.wordContainStr = wordContainStr;
function charPositionInStr(str, position) {
    return str.charAt(position);
}
exports.charPositionInStr = charPositionInStr;
function indexOfStr(str, searchStr) {
    return str.indexOf(searchStr);
}
exports.indexOfStr = indexOfStr;
function repeatStr(str, times) {
    return str.repeat(times);
}
exports.repeatStr = repeatStr;
function toLowerCaseStr(str) {
    return str.toLowerCase();
}
exports.toLowerCaseStr = toLowerCaseStr;
function toUpperCaseStr(str) {
    return str.toUpperCase();
}
exports.toUpperCaseStr = toUpperCaseStr;
function randomReadableStr() {
    adjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
    return adjectives + '-' + animals() + "-" + randomString;
}
exports.randomReadableStr = randomReadableStr;
