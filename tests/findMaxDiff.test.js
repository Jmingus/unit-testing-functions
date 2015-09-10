'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function () {
    it('should throw an exception if the input is not an array', function(){
        expect(function(){functions.findMaxDiff(1)}).to.throw('Invalid Input');
        expect(function(){functions.findMaxDiff('1')}).to.throw('Invalid Input');
    })
    it('should throw an exception if the inputted array does not contain numbers', function(){
        expect(function(){functions.findMaxDiff(['1',2])}).to.throw('Invalid Input')
    })
    it('should return the max difference between any two adjacent elements',function(){
        expect(functions.findMaxDiff([1,2,3,4,5,6,20,30])).to.be.deep.equal(14)
    })
});