'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function () {
    it('should throw an exception if the input is not an string', function(){
        expect(function(){functions.insertDashes(1)}).to.throw('Invalid Input');
    })
    it('should return the string with dashes between two consecutive letters', function(){
        expect(functions.insertDashes('abba test')).to.equal('a-b-b-a t-e-s-t')
        expect(functions.insertDashes('abba test why')).to.equal('a-b-b-a t-e-s-t w-h-y')
    })
});