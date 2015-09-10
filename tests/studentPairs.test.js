'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function () {
    it('should throw an exception if input isn\'t an array', function(){
        expect(function(){functions.studentPairs(1)}).to.throw('Invalid Input')
    })
    it('should throw an exception if array isn\'t filled with strings', function(){
        expect(function(){functions.studentPairs([1,2])}).to.throw('Invalid Input')
    })
    it('should return a new array filled with randomly selected pairs of names', function(){
        expect(functions.studentPairs(['tom','bill','jimmy','karly'])).to.have.members(['tom','bill'])
    })
});