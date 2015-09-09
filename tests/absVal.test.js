'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function () {
    it('should throw an exception if input is not a number', function(){
        expect(function(){functions.absVal([1])}).to.throw('Invalid Input')
    });
    it('should return the absolute value of the input', function(){
        expect(functions.absVal(-1.25)).to.be.deep.equal(1)
        expect(functions.absVal(1)).to.be.deep.equal(1)
    })
});