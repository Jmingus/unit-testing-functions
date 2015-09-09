'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('concatenateArrays', function() {
    it('should exist', function () {
        expect(functions.concatenateArrays).not.to.be.undefined;
    });
});