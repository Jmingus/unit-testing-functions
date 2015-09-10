'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function () {
    it('should throw an exception if input is not a number', function () {
        expect(function(){functions.getMonth('2')}).to.throw('Invalid Input')
    });
    it('should throw an exception if input is not greater than 0 or less than 13', function(){
        expect(function(){functions.getMonth(0)}).to.throw('Invalid Input')
    });
    it('should map the integer to the months object and return the month string', function(){
        expect(functions.getMonth(4)).to.be.deep.equal('April')
    })
});