'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function () {
    it('should throw an exception if input is not a string', function(){
        expect(function(){functions.sortLetters([1])}).to.throw('Invalid Input')
    })
    it('should return the inputString as a string with its letters sorted alphabetically', function(){
        expect(functions.sortLetters('edcba')).to.be.deep.equal('abcde')
    })
});