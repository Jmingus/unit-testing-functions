'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function () {
    it('should return one random value in the array', function(){
        expect(functions.randomElement([10,20,30])).to.have.members([10])
    })
});