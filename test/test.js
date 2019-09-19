'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('manipulation on string', () => {
    it('should return whoironman', () => {
        var result = index.overwriteStr('Iamironman', 0, 3, 'who');
        expect(result).to.equal('whoironman');
    });
    it('should return iAmIronman', () => {
        var result = index.appendStrToEnd('iAm', 'Ironman');
        expect(result).to.equal('iAmIronman');
    });
    it('should return helloThere', () => {
        var result = index.appendStrToStart('There', 'hello');
        expect(result).to.equal('helloThere');
    });
    it('should return IronmaniAm', () => {
        var result = index.appendStrToIndex('iAm', 0, 'Ironman');
        expect(result).to.equal('IronmaniAm');
    });
    it('should return IAmNobody', () => {
        var result = index.cloneStr('IAmNobody');
        expect(result).to.equal('IAmNobody');
    });
    it('should return 156723489', () => {
        var result = index.moveStr('123456789', 1, 4, 7);
        expect(result).to.equal('156723489');
    });
    it('should return Gobinda', () => {
        var result = index.removeStr('IamGobinda', 0, 3);
        expect(result).to.equal('Gobinda');
    });
    it('should return Lorem', () => {
        var result = index.sliceStr('Lorem Ipsum', 0, 5);
        expect(result).to.equal('Lorem');
    });
    it('should return Bengal', () => {
        var result = index.sliceStr('All Bengal', 4, 10);
        expect(result).to.equal('Bengal');
    });
    it('should return mynameisanthony', () => {
        var result = index.trimStr('mynameisanthonyxxx', 'x');
        expect(result).to.equal('mynameisanthony');
    });
    it('should return ynameisanthony', () => {
        var result = index.trimStrFromStart('mynameisanthony', 'm');
        expect(result).to.equal('ynameisanthony');
    });
    it('should return mynameisanthony', () => {
        var result = index.trimStrFromEnd('mynameisanthony', 'y');
        expect(result).to.equal('mynameisanthon');
    });
    it('should return false', () => {
        var result = index.emptyStrCheck('mynameisgobinda');
        expect(result).to.equal('false');
    });
    it('should return Hi I am Gobinda', () => {
        var result = index.replaceStr('Hi I am Rajat', 'Rajat', 'Gobinda');
        expect(result).to.equal('Hi I am Gobinda');
    });
    it('should return 7', () => {
        var result = index.lengthStr('Gobinda');
        expect(result).to.equal(7);
    });
    it('should return Hello World', () => {
        var result = index.concatStr('Hello ','World');
        expect(result).to.equal('Hello World');
    });
    it('should return B', () => {
        var result = index.returnChar(66);
        expect(result).to.equal('B');
    });
    it('should return true', () => {
        var result = index.wordContainStr('No pain, no gain','pain');
        expect(result).to.equal(true);
    });
    it('should return V', () => {
        var result = index.charPositionInStr('Victory',0);
        expect(result).to.equal('V');
    });
    it('should return 1', () => {
        var result = index.indexOfStr('Victory','i');
        expect(result).to.equal(1);
    });
    it('should return hellohellohello', () => {
        var result = index.repeatStr('hello',3);
        expect(result).to.equal('hellohellohello');
    });
    it('should return victory', () => {
        var result = index.toLowerCaseStr('Victory');
        expect(result).to.equal('victory');
    });
    it('should return VICTORY', () => {
        var result = index.toUpperCaseStr('Victory');
        expect(result).to.equal('VICTORY');
    });
    it('should return humanReadableString', () => {
        var result = index.randomReadableStr();
        // console.log(result);
        expect(result).to.equal(result);
    });
});