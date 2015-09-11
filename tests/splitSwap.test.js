'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('splitSwap', function () {
    it('should throw an exception if the input is not an array', function(){
        expect(function(){functions.splitSwap(1)}).to.throw('Invalid Input');
    })
    it('should return an array that has elements swapped across halves',function(){
        expect(functions.splitSwap([1,2,3,4,5])).to.be.deep.equal([3,4,5,1,2]);
        expect(functions.splitSwap([1,2,3,4,5,6])).to.be.deep.equal([4,5,6,1,2,3])
    })
});