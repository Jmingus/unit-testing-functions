'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun',function(){
    it('should throw an exception if input is not a string',function(){
        expect(function(){functions.fixProperNoun([1])}).to.throw('Invalid Input')
    });
    it('should return a noun that starts with a capital letter followed by lowercase letters',function(){
        expect(functions.fixProperNoun('abc')).to.deep.equal('Abc')
    })
})