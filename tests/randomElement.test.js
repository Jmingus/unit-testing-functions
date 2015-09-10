'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function () {
    it('should return one random value in the array', function(){
        var elements = ['a',3,4,[2],'s']
        expect(elements.indexOf(functions.randomElement(elements))).to.be.above(-1)
    })
});