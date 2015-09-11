'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('smallMultiples', function () {
    it('should throw an exception if the input is not a number', function(){
        expect(function(){functions.smallMultiples('1',[])}).to.throw('Invalid Input');
    })
    it('should return count of how many multiples were not greater than n',function(){
        expect(functions.smallMultiples(8,2)).to.be.deep.equal(3);
        expect(functions.smallMultiples(16,2)).to.be.deep.equal(7)
    })
});