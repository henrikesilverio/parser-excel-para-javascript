'use strict'

const assert = require('chai').assert;
const lexica = require('../src/analise-lexica');

describe("AnaliseLexica", function() {
    it("Deve retornar um erro quando a entrada não for uma string", function() {
        var testUndefined = function() { lexica(undefined); };
        var testNumero = function() { lexica(1); };
        var testBooleano = function() { lexica(true); };
        var testObjeto = function() { lexica({ 'a': 1 }); };
        var testFuncao = function() { lexica(function() { return 'OK'; }); };

        assert.throws(testUndefined, 'o valor de entrada não é uma "string"');
        assert.throws(testNumero, 'o valor de entrada não é uma "string"');
        assert.throws(testBooleano, 'o valor de entrada não é uma "string"');
        assert.throws(testObjeto, 'o valor de entrada não é uma "string"');
        assert.throws(testFuncao, 'o valor de entrada não é uma "string"');
    });

    it("Deve retornar uma palavra reservada", function() {
        var tokens = lexica('SUM');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'SUM');
    });

    it("Deve retornar um simbolo", function() {
        var tokens = lexica('(');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], '(');

        tokens = lexica(')');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], ')');
    });

    it("Deve retornar uma cadeia de caractere", function() {
        var tokens = lexica('""');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'LITERAL');

        tokens = lexica('"SASA"');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'LITERAL');

        tokens = lexica('"SUM"');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'LITERAL');

        // tokens = lexica('"("');
        // assert.equal(tokens.length, 1);
        // assert.equal(tokens[0], 'LITERAL');

        tokens = lexica('"1"');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'LITERAL');
    });

    it("Deve retornar um número", function() {
        var tokens = lexica('1');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'NUMERO');

        tokens = lexica('12');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'NUMERO');

        tokens = lexica('123');
        assert.equal(tokens.length, 1);
        assert.equal(tokens[0], 'NUMERO');
    });

    it("Deve conter a sequência de tokens SUM, (, ID, )", function() {
        var tokens = lexica('SUM(A2)');
        assert.equal(tokens[0], 'SUM');
        assert.equal(tokens[1], '(');
        assert.equal(tokens[2], 'ID');
        assert.equal(tokens[3], ')');
    });
});