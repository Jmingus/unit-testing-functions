'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function () {
    it('should throw an exception in the two inputs are not numbers', function () {
        expect(function(){functions.myMin([1],'2')}).to.throw('Invalid Input')
    });
    it('should return the smaller of the two inputs', function(){
        expect(functions.myMin(1,10)).to.be.deep.equal(1);
        expect(functions.myMin(10,1)).to.be.deep.equal(1);
        expect(functions.myMin(2.25,2.10)).to.be.deep.equal(2.10);
        expect(functions.myMin(-5,30)).to.be.deep.equal(-5);
        expect(functions.myMin(5,5)).to.be.deep.equal(5);
    })
});