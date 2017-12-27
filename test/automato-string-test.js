'use strict'

const assert = require('chai').assert;
const automato = require('../src/automato-string');

var cadeia = [];
var resultado = "";

describe("Autômato string", function () {
    it("Deve retornar 'Cadeia não aceita!' para string com aspas simples", function () {
        cadeia = ["\""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = ["\"", " ", "    "];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = ["\"", "S", "A", "1", "*", "!", "'", "$"];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");
    });

    it("Deve retornar 'Cadeia não aceita!' para string com aspas duplas", function () {
        cadeia = ["'"];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = ["'", " ", "    "];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = ["'", "S", "A", "1", "*", "!", "\"", "$"];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");
    });

    it("Deve retornar 'Cadeia aceita!' para string com aspas simples", function() {
        cadeia = ["'", "'"];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["'", "!", "'"];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["'", "\"", "'"];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["'", "\"", "'", ""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["'", " ", "'"];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");
    });

    it("Deve retornar 'Cadeia aceita!' para string com aspas duplas", function() {
        cadeia = ["\"", "\""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["\"", "!", "\""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["\"", "'", "\""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["\"", "'", "\"", ""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = ["\"", " ", "\""];
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");
    });
});