'use strict'

const assert = require('chai').assert;
const lexica = require('../src/analise-lexica');

describe("AnaliseLexica", function() {
    it("Deve retornar uma lista com 4 tokens", function() {
        assert.equal(lexica('SUM(A2)').length, 4);
    });

    it("Deve conter a sequência de tokens SUM, (, ID, )", function() {
        var tokens = lexica('SUM(A2)');
        assert.equal(tokens[0], "SUM");
        assert.equal(tokens[1], "(");
        assert.equal(tokens[2], "ID");
        assert.equal(tokens[3], ")");
    });
});