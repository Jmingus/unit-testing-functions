'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function () {
    it('should throw an exception if the input for string is not a string', function(){
        expect(function(){functions.mySubstring(1,1,2)}).to.throw('Invalid Input');
        expect(function(){functions.mySubstring([2],3,2)}).to.throw('Invalid Input');
    })
    it('should throw an exception if the inputted numbers are not numbers', function(){
        expect(function(){functions.mySubstring('string','2','2')}).to.throw('Invalid Input')
    })
    it('should return a string that contains the letters from the start number to the end number',function(){
        expect(functions.mySubstring('polly',0,3)).to.be.deep.equal('pol');
        expect(functions.mySubstring('polly',3,0)).to.be.deep.equal('pol');
    })
});