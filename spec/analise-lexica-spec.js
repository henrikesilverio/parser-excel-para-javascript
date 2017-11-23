'use strict'

const lexica = require('../src/analise-lexica');

describe("AnaliseLexica", function() {
    it("Deve retornar uma lista com 4 tokens", function() {
        expect(lexica('SUM(A2)').length).toEqual(4);
    });

    it("Deve conter a sequência de tokens SUM, (, ID, )", function() {
        var tokens = lexica('SUM(A2)');
        expect(tokens[0]).toEqual("SUM");
        expect(tokens[1]).toEqual("(");
        expect(tokens[2]).toEqual("ID");
        expect(tokens[3]).toEqual(")");
    });
});