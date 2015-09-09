'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function () {
    it('should throw an exception in the input if not an array', function () {
        expect(function(){functions.myMax(1)}).to.throw('Invalid Input')
    });
    it('should throw an exception in the input if the array is not filled with integers', function(){
        expect(function(){functions.myMax(['b','d'])}).to.throw('Invalid Input')
    })
    it('should return the largest integer from the array', function(){
        expect(functions.myMax([10,2,5,20])).to.be.deep.equal(20)
    })
});