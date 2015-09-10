'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function () {
    it('should throw an exception if input is not a number',function(){
        expect(function(){functions.sumSquares('2')}).to.throw('Invalid Input')
    })
    it('should throw an exception if input is not a positive, non-zero number', function(){
        expect(function(){functions.sumSquares(-2)}).to.throw('Invalid Input');
        expect(function(){functions.sumSquares(0)}).to.throw('Invalid Input')
    })
    it('should return the sum of squares of all integers from 1 up to input', function(){
        expect(functions.sumSquares(3)).to.be.deep.equal(14);
    })
});