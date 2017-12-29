'use strict'

const assert = require('chai').assert;
const automato = require('../src/palavra-reservada');

var cadeia = [];
var resultado = "";

describe("Autômato palavra reservada", function () {
    it("Deve retornar 'Cadeia não aceita!' para palavras diferentes", function () {
        cadeia = "skdasdkahdsjkh".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "213165465".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "@$!#%$#¨!".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");
    });

    it("Deve retornar 'Cadeia não aceita!' para palavras incompletas", function () {
        cadeia = "S".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "SU".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");

        cadeia = "SUMI".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia não aceita!");
    });

    it("Deve retornar 'Cadeia aceita!' para palavras reservadas", function () {
        cadeia = "SUM".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");

        cadeia = "SUMIF".split('');
        resultado = automato(cadeia);
        assert.equal(resultado, "Cadeia aceita!");
    });
});